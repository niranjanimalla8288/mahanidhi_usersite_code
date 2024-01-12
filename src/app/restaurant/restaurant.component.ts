import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { Serviceprovidercategory } from '../model/serviceprovidercategory';
import { data } from 'jquery';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  id: number = 0;
  categoryData: any[] = [];
  categoryByServiceProvider: any[] = [];
  constructor(public router: ActivatedRoute, public route: Router, public serviceCategory: ServiceprovidercategoryService) { }

  ngOnInit(): void {
    this.getCategoryData();
    this.getServicetoCategoryData();
  }

  getCategoryData(): void {
    this.id = this.router.snapshot.params['id'];
    this.serviceCategory.getServiceprovidercategoryById(this.id).subscribe((data: any) => {
      this.categoryData = data;
      console.log("category data")
    });
  }
  getServicetoCategoryData() {
    this.serviceCategory.getServiceProvidertoCategoryIdData(this.id).subscribe((data: any) => {
      console.log(data, "Category by id data");
      this.categoryByServiceProvider = data;
    });
  }
}
