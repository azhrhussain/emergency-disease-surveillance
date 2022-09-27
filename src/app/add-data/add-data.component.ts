import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent implements OnInit {
  @ViewChild(QuestionnaireComponent)
  child!: QuestionnaireComponent;

  constructor(private route: ActivatedRoute) {}
  id: any = localStorage.getItem('email');
  getData=()=>{
    console.log('call with add cp');
    this.child.handleShowTodayData();
  }
  receivedSelectedUserData($event:any){
    console.log('id', this.id, 'receivedSelectedUserData',$event);
  }
  //.split('@')[0];
  ngOnInit(): void {
    // const routeId =  this.route.snapshot.paramMap.get('id');
    // console.log('routerId:', routeId);
  }
}
