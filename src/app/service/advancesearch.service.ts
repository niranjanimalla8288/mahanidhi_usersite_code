import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvancedSearchDTO } from '../model/AdvancedSearchDTO';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvancesearchService {

  // public apiurl = "http://localhost:5148/api/AdvancedSearch";
  public apiurl = environment.apiUrl;
  // http://localhost:5148/api/AdvancedSearch?StateId=1&CityId=1&CategoryId=1&SearchString=vamshi
  // http://localhost:4200/recentsposts?StateId=1&CityId=2&CategoryId=1&SearchString=VAMSHI
  constructor(public http: HttpClient) { }

  // getAdvancesearch(receivedParams:any) {
  //   return this.http.get(this.apiurl+receivedParams );
  // }

  getAdvancesearch(searchDTO: AdvancedSearchDTO): Observable<any> {
    // Create HttpParams and append each parameter
    let params = new HttpParams()
      .set('StateId', searchDTO.StateId.toString())
      .set('CityId', searchDTO.CityId.toString())
      .set('CategoryId', searchDTO.CategoryId.toString())
      .set('customerName', searchDTO.customerName.toString())
      .set('customerEmail', searchDTO.customerEmail.toString())
      .set('customerMobile', searchDTO.customerMobile.toString())
      .set('lookingFor', searchDTO.lookingFor.toString())
      .set('SearchString', searchDTO.SearchString);


    // Make the GET request with the properly serialized parameters
    return this.http.get<any>(this.apiurl + "AdvancedSearch", { params });
  }

  postData(data: AdvancedSearchDTO) {
    return this.http.post(this.apiurl + "AdvancedSearch", data);
  }
}
