import { Component, OnInit } from '@angular/core';
import { Serviceprovider } from '../model/serviceprovider';
import { CityService } from '../service/city.service';
import { ServiceProviderService } from '../service/service-provider.service';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';

@Component({
  selector: 'app-homepagesidecontaines',
  templateUrl: './homepagesidecontaines.component.html',
  styleUrls: ['./homepagesidecontaines.component.css']
})
export class HomepagesidecontainesComponent implements OnInit {
  constructor(private spService: ServiceProviderService, private cityService: CityService, public categoryService: ServiceprovidercategoryService) { }
  sp: any[] = [];
  city: any[] = [];
  stars: Serviceprovider[] = [];
  categoryData: any;
  categoryCount: number = 0;

  ngOnInit(): void {
    this.spService.getServiceProviders().subscribe((data: any) => {
      this.sp = data;
      this.stars = data;
    });
    this.cityService.getCities().subscribe((data: any) => {
      this.city = data
    });
    this.getCatagory();
    // this.countCategories();

  }
  getSPName(cityId: number): string {
    const State = this.city.find(c => c.id === cityId);
    return State ? State.name : '';
  }

  // countCategories() {
  //   this.categoryCount = this.categoryData.length;
  // }

  getCatagory() {
    this.categoryService.getServiceprovidercategories().subscribe((data: any) => {
      this.categoryData = data;
    });
  }
  getRatingArray(rating: number): any[] {
    return Array.from({ length: rating });
  }
}
