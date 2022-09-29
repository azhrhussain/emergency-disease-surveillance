import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { getAuth, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  email: string = '';
  password: string = '';
  onLogin = () => {
    //'azharhussain2090@gmail.com', 'password1!'
    console.log('email::', this.email, this.password);
    if (this.email == '') {
      alert('Please enter email!');
      return;
    }
    if (this.password == '') {
      alert('Please enter password!');
      return;
    }
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  };
  isLoggedIn: any = localStorage.getItem('token');
  ngOnInit(): void {}

  // auth = getAuth();
  // user = 'admin@gmail.com';
  // updateProfile = updateProfile(this.user, {
  //   displayName: "Azhar Hussain", photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(() => {
  //   // Profile updated!
  //   // ...
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // });
}
