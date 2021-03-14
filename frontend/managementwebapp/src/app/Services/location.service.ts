import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants as uc } from '../Constants/UrlConstants';
import { Location } from '../Entities/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url: String = uc.LOCATION_URL;
  constructor(private http: HttpClient) { }

  save(location: Location): Observable<any> {
    return this.http.post(this.url + "save", location);
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
