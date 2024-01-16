import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AddsService {

  public apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getAdds() {
    return this.http.get(this.apiUrl + "Add");
  }

  getAddsDataCategoryById(cityId: number, categoryId: number) {
    return this.http.get(this.apiUrl + "Add/getByCategoryByAddDetaisl?" + "cityId=" + cityId + "&categoryid=" + categoryId);
  }
}
