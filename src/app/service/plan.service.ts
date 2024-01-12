import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(public http: HttpClient) { }

  public apiurl = environment.apiUrl;

  getPlan() {
    return this.http.get(this.apiurl + "Plans");
  }
}
