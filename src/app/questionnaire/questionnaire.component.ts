import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database, set, onValue, ref, update } from '@angular/fire/database';

import {
  PROVINCES,
  QUESTIONS,
  RAPID_ANTIGEN_TESTS_CONDUCTED,
  USERS,
} from '../utils/constants';
import {
  getSumAndMergeData,
  getTotalSum,
  objectOfData,
  sumOfQuestion,
} from '../utils/normilize';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  constructor(private http: HttpClient, public database: Database) {}

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
  userid: string = this.params.get('userid');
  selectedUser =
    this.users[
      this.users.map((name) => name.toLowerCase()).indexOf(this.userid)
    ];
  date: any = new Date().getDate();
  today: string = new Date().toLocaleDateString('en-ZA');

  hypothisis: any = {
    submittedBy: this.selectedUser,
    reportingDate: this.today,
    province: this.selectedprovince,
    districts: 'lahore dist',
    tehsil: 'liaquatpur teh',
    uc: '86,56,566c uc',
    healthFacilityName: 'Killa abdulih Name',
    healthFacilityType: 'Killa abdulih Type',
    healthFacilityCode: '20221 code',
    healthFacilityCamp: 'Musa zai camp',
    phoneNumber: '03458033800',
    organizationName: 'WHO',
    catchmentPopulation: 2555,
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
  //(ngModelChange)="onRapidAntigenTest($event, testData['id'],'positive')"
  // onRapidAntigenTest(val: string, currentElm:number, type: string) {
  //   // const upadedObj = this.rapidAntigenTest.map((item)=>item);
  //   console.log(val, type, currentElm, this.rapidAntigenTest);

  //   // this.rapidAntigenTest[type] =
  // }

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
  obj1 = {};

  onCreatePost(postData: any) {
    // Send Http request
    console.log('submitPost:', postData);
    this.http
      .post(this.url, postData)
      .subscribe((response) => console.log('response:', response));
  }

  handleClick() {
    alert('clicked!');
  }

  handleShowTodayData() {
    const startCountRef = ref(this.database, '/questionnaire/2022/09/26');
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('data', data);
      if (data) {
        // const sumAndMergeData = getSumAndMergeData(data);

        this.questions = getSumAndMergeData(data);
        this.questionSumData = getTotalSum(this.questions);
      }
    });
  }
  handleSave() {
    const payload = {
      reportedBy: this.selectedUser,
      reportingDate: this.hypothisis.reportingDate,
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

    set(
      ref(
        this.database,
        'questionnaire/' +
          `${this.hypothisis.reportingDate}/${this.hypothisis.submittedBy}`
      ),
      payload
    );

    // console.log('hypothisis:', this.hypothisis, this.today);
    // console.log('rapidAntigenTests:', this.rapidAntigenTest);
  }

  id: number = 5;
  ngOnInit(): void {}
}
