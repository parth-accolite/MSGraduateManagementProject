import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Feedback } from '../Entities/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  url: String = uc.FEEDBACK_URL;
  constructor(private http: HttpClient) { }

  save(feedback: Feedback): Observable<any> {
    return this.http.post(this.url + "save", feedback);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "getAll");
  }

}
