import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { User } from 'src/app/Entities/User';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user !: SocialUser;
  loggedIn!: boolean;
  registered!: boolean;
  customUser = new User();

  userForm: FormGroup;
  designation = new FormControl("");

  constructor(private authService: SocialAuthService, public router: Router, fb: FormBuilder, private loginService: LoginService) {
    this.userForm = fb.group({
      designation: this.designation,
    })
  }

  ngOnInit(): void {
  }

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log(this.user);
      this.loginService.loginUser(user.email).subscribe((resp) => {
        console.log(resp);
        if (resp !== null) {
          localStorage.setItem('idToken', user.idToken);
          localStorage.setItem('registered', 'true');
          localStorage.setItem('loggedIn', 'true');

          this.registered = true;
          this.loggedIn = true;
          this.router.navigate(['graduate']);
        }
        this.customUser.name = user.name;
        this.customUser.emailId = user.email;
        this.customUser.authCode = user.authToken;
        this.customUser.photoUrl = user.photoUrl;
        this.registered = false;
      })
    });
  }


  submitForm(): void {
    console.log(this.userForm.value);
    this.customUser.designation = this.userForm.value.designation;
    console.log(this.customUser);
    this.loginService.registerUser(this.customUser).subscribe((resp) => {
      console.log(resp);
      localStorage.setItem('idToken', this.user.idToken);
      localStorage.setItem('idToken', this.user.idToken);
      this.registered = true;
      this.router.navigate(['graduate']);
    })

  }

}
