import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
    constructor(private http: HttpClient, public authService: AuthService) {   
    }
    isLogin: any=localStorage.getItem('token');
    userid:any = localStorage.getItem('userid')?.split('@')[0];
    isAdmin: any = this.userid === 'admin' ||   this.userid === 'muhammadshahid.15.pk';
  logout = () => {
      this.isLogin=false;
    this.authService.SignOut();
  };
  checkLogin=()=>{
    return localStorage.getItem('token')?true:false;
  }
  onInit(){
    this.isLogin=true;
  }
}
