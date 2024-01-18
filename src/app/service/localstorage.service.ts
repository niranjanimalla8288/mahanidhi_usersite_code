import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerLocalStorageData } from '../model/customer-localstorage-data';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
