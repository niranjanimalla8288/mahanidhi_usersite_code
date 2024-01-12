import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../model/state';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // public apiurl = "http://localhost:5148/api/States";
  public apiurl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  getStates() {
    return this.http.get(this.apiurl + "States");
  }

  getStateById(id: number) {
    return this.http.get(`${this.apiurl + "States"}/getStateById?Id=${id}`);
  }

  // getCitiesByStateById(id: number) {
  //   return this.http.get(`${this.apiurl}/getstatecities?Id=${id}`);
  // }
  getCitiesByStateById(id: number) {
    return this.http.get(this.apiurl + "States" + "/getstatecities?id=" + id);
  }

  createState(data: State) {
    return this.http.post(this.apiurl, data);
  }

  getCountByState(stateId: number): Observable<number> {
    const url = `${this.apiurl + "States"}/cities/count?stateId=${stateId}`;
    return this.http.get<number>(url);
  }

  updateState(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiurl + "States"}/${id}`, data);
  }


  // deleteState(id: number) {
  //   return this.http.delete(`${this.apiurl}?id=${id}`);
  // }

  deleteState(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5148/api/States/${id}`);
  }
}
