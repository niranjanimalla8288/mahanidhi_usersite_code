import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessRegistration } from '../model/business-registration';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class BusinessRegistrationService {

  // public apiUrl = "http://localhost:5148/api/BusinessRegistrations";
  public apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  businesPost(data: BusinessRegistration) {
    return this.http.post(this.apiUrl + "BusinessRegistrations", data);
  }



}
