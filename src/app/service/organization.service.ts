import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(public http: HttpClient) { }

  public apiurl = environment.apiUrl;


  getOrganizationDetails() {
    return this.http.get(this.apiurl + "Organizations");
  }
}
