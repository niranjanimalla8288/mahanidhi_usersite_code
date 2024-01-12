import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  // public apiurl = "http://localhost:5148/api/Cities";
  public apiurl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getCities() {
    return this.http.get(this.apiurl + "Cities");
  }

  // getCityById(id: number) {
  //   return this.http.get(`${this.apiurl}/getCityById?Id=${id}`);
  // }
  getCityById(id: number): Observable<any> {
    return this.http.get(this.apiurl + "Cities" + "/getByCitywithID?id=" + id);
  }



  createCity(data: City) {
    return this.http.post(this.apiurl + "Cities", data);
  }

  updateCity(id: number, data: any): Observable<any> {
    // Assuming there is an 'id' property in the City object
    return this.http.put(`${this.apiurl + "Cities"}/${data.id}`, data);
  }

  deleteCity(id: number) {
    return this.http.delete(this.apiurl + "Cities" + "/" + id);
  }
  // http://localhost:5148/api/Cities/3
}
