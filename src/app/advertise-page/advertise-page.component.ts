import { Component, OnInit } from '@angular/core';
import { AddsService } from '../service/adds.service';
import { ActivatedRoute } from '@angular/router';
import { AddModel } from '../model/adds';
import { data } from 'jquery';

@Component({
  selector: 'app-advertise-page',
  templateUrl: './advertise-page.component.html',
  styleUrls: ['./advertise-page.component.css']
})
export class AdvertisePageComponent implements OnInit {
  id: any;
  addModel: AddModel = new AddModel();
  add: any[] = [];
  constructor(public _addService: AddsService, public rout: ActivatedRoute) { }
  localStorageStateId: number = 0;;
  localStorageCityId: number = 0;
  localStorageCategoryId: number = 0;
  adds: AddModel[] = [];
  sideBanners: AddModel | null | undefined;
  ngOnInit(): void {
    try {
      this.localStorageStateId = Number(localStorage.getItem('StateId'));
      this.localStorageCityId = Number(localStorage.getItem('CityId'));
      this.localStorageCategoryId = Number(localStorage.getItem('CategoryId'));
      console.log(this.localStorageCategoryId, "This is Local storage Category Id");
    }
    catch {
    }

    this.id = this.rout.snapshot.params['id'];
    this._addService.getAddsDataCategoryById(this.localStorageCityId, this.localStorageCategoryId).subscribe((data: any) => {
      this.adds = data;

      try {
        // Search for side nbanner
        this.sideBanners = this.adds.find(item => item.addPlace === 'SideBanner');

      } catch {

      }
    });

  }

}
