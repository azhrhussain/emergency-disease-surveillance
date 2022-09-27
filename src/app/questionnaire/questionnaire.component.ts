import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  constructor(private http: HttpClient, public database: Database) {}
  @Output() onSelectedData = new EventEmitter<any>();

  isEditable: boolean = false;

  users: Array<string> = USERS;
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
  selectedUser =
    this.users[
      this.users.map((name) => name.toLowerCase()).indexOf(this.userid)
    ];
  date: any = new Date().getDate();
  today: string = new Date().toLocaleDateString('en-ZA');
  // selectedDate: string;

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

  url: string =
    'https://emergency-disease-surveillance-default-rtdb.asia-southeast1.firebasedatabase.app/questionnaire.json';

  // onCreatePost(postData: any) {
  //   // Send Http request
  //   console.log('submitPost:', postData);
  //   this.http
  //     .post(this.url, postData)
  //     .subscribe((response) => console.log('response:', response));
  // }
  todaysRawData: any;
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
            if (
              this.userid === 'admin' ||
              this.userid === 'muhammadshahid.15.pk'
            ) {
              const { hypothisisData, questionsData, rapidAntigenTestData } =
                getSumAndMergeData(data);
              this.hypothisis = hypothisisData;
              this.questions = questionsData;
              this.rapidAntigenTest = rapidAntigenTestData;
            } else {
              const { hypothisis, queestionsData, rapidAntigenTest } = data[this.selectedUser].data;
              this.hypothisis = hypothisis;
              this.questions = queestionsData;
              this.rapidAntigenTest = rapidAntigenTest;
            }
            this.questionSumData = getTotalSum(this.questions);
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

    // const urlParams = '/questionnaire/' + this.hypothisis.reportingDate;
    // const startCountRef = ref(this.database, urlParams);
    // onValue(startCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log('receidved data:', data);
    //   // const data = TEST_DATA;
    //   if (data) {
    //     const { hypothisisData, questionsData, rapidAntigenTestData } =
    //       getSumAndMergeData(data);
    //     this.hypothisis = hypothisisData;
    //     this.questions = questionsData;
    //     this.questionSumData = getTotalSum(this.questions);
    //     this.rapidAntigenTest = rapidAntigenTestData;
    //   } else {
    //     alert(
    //       'Sorry!! No data entries found for ' +
    //         this.hypothisis.reportingDate +
    //         '\n\nFor more info please contact Adminstrator.'
    //     );
    //   }
    // });
  }
  selectedUserData: any;
  // onSelectedUserSave() {
  //   this.selectedProduct = product;
  // }
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
        alert('Data Submitted Successfuly...!\n\nHave a good day! :)');
      })
      .catch((error) => {
        // The write failed...
        alert(
          'Something went wrong.\n\nCheck your internet connection or contact with administrator.'
        );
      });
  }

  ngOnInit(): void {
    //console.log('submittedByAzhar------>',submittedByAzhar)
  }
}
