import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Observable } from 'rxjs';
import { Graduate } from '../Entities/Graduate';

@Injectable({
  providedIn: 'root'
})
export class GraduateService {

  url: String = uc.GRADUATE_URL;

  constructor(private http: HttpClient) { }

  addOrEditGraduate(graduate: Graduate): Observable<any> {
    console.log("in service", graduate);
    return this.http.post(this.url + "save", graduate);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "getAll");
  }

  searchByName(name: String): Observable<any> {
    return this.http.get(this.url + "get/" + name);
  }
}
