import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from '../model/contacts';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // public apiurl = "http://localhost:5148/api/Contact";
  public apiurl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  getContacts() {
    return this.http.get(this.apiurl + "Contact");
  }

  getContactById(id: number) {
    return this.http.get(`${this.apiurl + "Contact"}/${id}`);
  }

  createContact(data: Contacts) {
    return this.http.post(this.apiurl + "Contact", data);

  }
}
