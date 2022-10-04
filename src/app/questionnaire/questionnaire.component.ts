import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import {
  Database,
  set,
  onValue,
  ref,
  child,
  get,
} from '@angular/fire/database';

import {
  PROVINCES,
  QUESTIONS,
  QUESTIONS_API_URL,
  RAPID_ANTIGEN_TESTS_CONDUCTED,
  USERS,
} from '../utils/constants';
import {
  getSumAndMergeData,
  getTotalSum,
  sumOfQuestion,
} from '../utils/normilize';
import { TEST_DATA } from '../utils/testData';
import { getDatabase } from 'firebase/database';
import { ConfirmSaveRepoertDialogComponent } from '../confirm-save-repoert-dialog/confirm-save-repoert-dialog.component';
import { ExportService } from '../_services/export.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public database: Database,
    public dialog: MatDialog,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {}
  @Output() onSelectedData = new EventEmitter<any>();

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    let dialogConfirmSubmitRef = this.dialog.open(
      ConfirmSaveRepoertDialogComponent,
      {
        width: '500px',
        enterAnimationDuration,
        exitAnimationDuration,
      }
    );
    const sub = dialogConfirmSubmitRef.componentInstance.submitData.subscribe(
      () => {
        // do something
        this.handleSave();
        console.log('Opned subscribe, submitData', this);
      }
    );
    dialogConfirmSubmitRef.afterClosed().subscribe(() => {
      // unsubscribe onAdd
      console.log('submitData unsub: close:', sub);
    });
  }

  isEditable: boolean = false;

  users: Array<{}> = USERS;
  provinces: Array<string> = PROVINCES;
  questionsTitle = QUESTIONS;

  questionsPayload = [];

  // questions = questionsPayload();
  questions: any = QUESTIONS;

  rapidAntigenTest: Array<{ [key: string]: any }> =
    RAPID_ANTIGEN_TESTS_CONDUCTED;

  selectedprovince = this.provinces[0];

  params: any = new URLSearchParams(window.location.search.slice(1));
  // userid: string = this.params.get('userid');
  userid: any = localStorage.getItem('userid')?.split('@')[0];

  selectedUser = this.users
    .map((u) => {
      if (u['id'].toLowerCase() === this.userid) {
        return u['id'];
      }
    })
    .join('');

  isAdmin: boolean =
    this.userid === 'admin' || this.userid === 'muhammadshahid.15.pk';
  date: any = new Date().getDate();
  today: string = new Date().toLocaleDateString('en-ZA');
  isEdit: boolean = false;
  canEdit: boolean = false;
  isAddNew: boolean = false;
  togelEdit = () => {
    this.isAddNew = !this.isAddNew;
    this.isEdit = !this.isEdit;
  };
  hypothisis: any = {
    submittedBy: this.selectedUser,
    reportingDate: this.today,
    province: this.selectedprovince,
    districts: '',
    tehsil: '',
    uc: '',
    healthFacilityName: '',
    healthFacilityType: '',
    healthFacilityCode: '',
    healthFacilityCamp: '',
    phoneNumber: '',
    organizationName: '',
    catchmentPopulation: 0,
  };

  questionSumData: { [key: string]: any } = getTotalSum(this.questions);

  onChangeCase($event: any, type: string, campare: any, gender: any) {
    console.log('questionSumData[type][campare][gender] ',this.questionSumData[type][campare][gender] )
    this.questionSumData[type][campare][gender] = sumOfQuestion(
      this.questions,
      type,
      campare,
      gender
    );
  }

  // (focus)="onFocusInput($event)"
  // onFocusInput($event: any, qID: any, type: string, campare: any, gender: any) {
  //   let elmVal = ($event.target as HTMLInputElement).value;

  //   console.log('onFocusInput:', ($event.target as HTMLInputElement).value);
  //   let confirmValue = elmVal == '0' ? '' : elmVal;
  //   let currentObject;
  //   if (elmVal == '0') {
  //     currentObject = this.questions.find((obj) => {
  //       const payload = {};
  //       if ((obj.qId = qID)) {
  //         console.log(obj);
  //         obj.case.lessThen5.male = confirmValue;
  //       }
  //       return payload;
  //     });
  //   }else{
  //     currentObject = this.questions.find((obj) => {
  //       const payload = {};
  //       if ((obj.qId = qID)) {
  //         console.log(obj);
  //         obj.case.lessThen5.male = elmVal;
  //       }
  //       return payload;
  //     });
  //   }
  //   console.log('onFocusInput:', currentObject);
  // }

  url: string = QUESTIONS_API_URL;

  // onCreatePost(postData: any) {
  //   // Send Http request
  //   console.log('submitPost:', postData);
  //   this.http
  //     .post(this.url, postData)
  //     .subscribe((response) => console.log('response:', response));
  // }
  todaysRawData: any;
  excelReportJSON: any = [];
  reportDataForExcelJson: any = {};
  isReportGeneratedForExport: boolean = false;

  export() {
    const fileName =
      this.reportDataForExcelJson.hypothisis.submittedBy === 'admin'
        ? 'Main'
        : this.reportDataForExcelJson.hypothisis.submittedBy;
    const exportFileTitle = `${fileName} [${this.reportDataForExcelJson.hypothisis.reportingDate}] EDSS Report`;
    this.exportService.exportExcel(
      this.reportDataForExcelJson,
      exportFileTitle
    );
  }
  handleShowTodayData() {
    //api endpoint
    console.log('snapToData........');
    // const urlParams = '/questionnaire/' + this.hypothisis.reportingDate;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `questionnaire/${this.hypothisis.reportingDate}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log('receidved data aalll--->:', data);
          // const data = TEST_DATA;
          if (data) {
            this.todaysRawData = data;
            if (this.hypothisis.submittedBy.toLocaleLowerCase() === 'admin') {
              console.log('inside if::', this.selectedUser, this.userid);
              const { hypothisisData, questionsData, rapidAntigenTestData } =
                getSumAndMergeData(data);
              this.hypothisis = hypothisisData;
              this.questions = questionsData;
              this.rapidAntigenTest = rapidAntigenTestData;
              this.hypothisis.submittedBy = this.selectedUser;
              this.isReportGeneratedForExport = true;
            } else {
              const user =
                this.selectedUser === this.hypothisis.submittedBy
                  ? this.selectedUser
                  : this.hypothisis.submittedBy;
              if (data[user]) {
                const { hypothisis, queestionsData, rapidAntigenTest } =
                  data[user].data;
                this.hypothisis = hypothisis;
                this.questions = queestionsData;
                this.rapidAntigenTest = rapidAntigenTest;
                this.isReportGeneratedForExport = true;
              } else {
                alert('Opps!!! No record found for selected user.');
              }
            }
            this.questionSumData = getTotalSum(this.questions);
            this.reportDataForExcelJson = {
              hypothisis: this.hypothisis,
              queestionsData: this.questions,
              questionSumData: this.questionSumData,
              rapidAntigenTest: this.rapidAntigenTest,
            };

            this.canEdit = true;
            this.isAddNew = false;
            this.isEdit = false;
          }
        } else {
          alert(
            'Sorry! No data available ' +
              this.hypothisis.reportingDate +
              '\n\nFor more info please contact Adminstrator.'
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  selectedUserData: any;

  onSelectedUserData() {
    this.handleShowTodayData();
    console.log('todaysRawData-------->', this.todaysRawData);
    this.selectedUserData = this.todaysRawData;
    this.onSelectedData.emit(this.todaysRawData);
  }

  handleSave() {
    const payload = {
      reportedBy: this.selectedUser,
      reportingDate: new Date().toLocaleString(),
      // reportingDate: this.hypothisis.reportingDate,
      data: {
        hypothisis: this.hypothisis,
        rapidAntigenTest: this.rapidAntigenTest,
        queestionsData: this.questions,
      },
    };

    // console.log('userid:',this.selectedUser, 'payload:', payload);
    // this.http
    //   .post(this.url, payload)
    //   .subscribe((response) => console.log('response:', response));
    const db = getDatabase();
    set(
      ref(
        this.database,
        'questionnaire/' +
          `${this.hypothisis.reportingDate}/${this.hypothisis.submittedBy}`
      ),
      payload
    )
      .then(() => {
        // Data saved successfully!
        this.isEdit = false;
        this.isAddNew = false;
        alert('Data Submitted Successfuly...!\n\nHave a good day! :)');
      })
      .catch((error) => {
        // The write failed...
        alert(
          'Something went wrong.\n\nCheck your internet connection or contact with administrator.'
        );
      });
  }
}
