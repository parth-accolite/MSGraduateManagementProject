import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Observable } from 'rxjs';
import { User } from '../Entities/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: String = uc.USER_URL;
  constructor(private http: HttpClient) { }

  loginUser(emailId: String): Observable<any> {
    return this.http.get(this.url + "get/" + emailId);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.url + "save", user);
  }
}
