import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public apiurl = environment.apiUrl;
  private localStorageKey = 'customer';
  constructor(public http: HttpClient) { }


  createCustomer(data: Customer) {
    return this.http.post(this.apiurl + "AdvancedSearch", data)
  }

  saveCustomerToLocalStorage(customer: Customer): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(customer));
  }

  getCustomerFromLocalStorage(): Customer | null {
    const customerString = localStorage.getItem(this.localStorageKey);
    if (customerString) {
      return JSON.parse(customerString);
    }
    return null;
  }

  clearLocalStorage(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
