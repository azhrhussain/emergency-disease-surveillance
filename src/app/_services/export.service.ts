import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  myObj = { key1: 1, key2: 2, key3: { nestedKey1: 3, nestedKey2: 4 } };

  public exportExcel(jsonData: any[], fileName: string): void {
    // const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([
    //   [ 'Title' ], // A1
    //   [ '10' ], // A2
    //   [ 3 ] // A3
    // ]);
    const merge = [
      { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },
      { s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
    ];
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([
    //   {
    //     id: 'nick',
    //     items: [
    //       {
    //         name: 'ball',
    //       },
    //       {
    //         name: 'phone',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'jack',
    //     items: [
    //       {
    //         name: 'pen',
    //       },
    //       {
    //         name: 'doll',
    //       },
    //     ],
    //   },
    // ]);
    // ws['!merges'] = merge;
    const dataType = 'data:application/vnd.ms-excel;base64,'
    let table:any = document.getElementById('reports-tables');
    // const tableHtml = table.outerHTML.replace(/ /g, '%20');
    // this.workbook = new XLSX.utils.sheet_to_html({ useSharedStrings: true, useStyles: true });
    
    // window.open('data:application/vnd.ms-excel,' + escape(table));
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, "Sheet1");
    // XLSX.writeFile(wb, 'htmltabe.xlsx');

    // XLSX.utils.book_append_sheet(wb, ws, 'object_to_save');
    // var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    // XLSX.writeFile(wb, 'Tests.xlsx');
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    // const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
}
