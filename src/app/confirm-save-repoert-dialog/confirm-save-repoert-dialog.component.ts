import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-save-repoert-dialog',
  templateUrl: './confirm-save-repoert-dialog.component.html',
  styleUrls: ['./confirm-save-repoert-dialog.component.scss']
})
export class ConfirmSaveRepoertDialogComponent implements OnInit {
  constructor() { }
  submitData = new EventEmitter()
  submitReport = ()=>{
    console.log('submit submitReport');
    this.submitData.emit();
  }
  ngOnInit(): void {
  }

}
