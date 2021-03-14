import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Institute } from '../Entities/Institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  url: String = uc.INSTITUTE_URL;
  constructor(private http: HttpClient) { }

  save(institute: Institute): Observable<any> {
    return this.http.post(this.url + "save", institute);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "getAll");
  }

  getById(id: any): Observable<any> {
    return this.http.get(this.url + "get/" + id);
  }

  searchByInstitute(instituteId: String): Observable<any> {
    return this.http.get(this.url + "searchById/" + instituteId);
  }
}
