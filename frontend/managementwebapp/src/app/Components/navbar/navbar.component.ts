import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = localStorage.getItem("loggedIn") === "true";
  user !: SocialUser;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    console.log("ng on init of navbar",localStorage.getItem("loggedIn") === "true");
  }

  signOut(): any {
    this.authService.signOut();
    localStorage.setItem('idToken', "");
    localStorage.setItem('registered', "");
    localStorage.setItem('loggedIn', "");
  }

}
