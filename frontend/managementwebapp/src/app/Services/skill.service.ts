import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Skill } from '../Entities/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: String = uc.SKILL_URL;
  constructor(private http: HttpClient) { }

  save(skill: Skill): Observable<any> {
    return this.http.post(this.url + "save", skill);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "getAll");
  }

  getById(id: any): Observable<any> {
    return this.http.get(this.url + "get/" + id);
  }

  searchByLocation(locationId: String): Observable<any> {
    return this.http.get(this.url + "searchById/" + locationId);
  }
}
