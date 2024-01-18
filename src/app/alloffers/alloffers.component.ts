import { Component, OnInit } from '@angular/core';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { ServiceProviderService } from '../service/service-provider.service';
import { Serviceprovider } from '../model/serviceprovider';

@Component({
  selector: 'app-alloffers',
  templateUrl: './alloffers.component.html',
  styleUrls: ['./alloffers.component.css']
})

export class AlloffersComponent implements OnInit {


  categoryData: any;
  sp: any;
  city: any[] = [];
  stars: Serviceprovider[] = [];
  loading = true;
  constructor(public categoryService: ServiceprovidercategoryService, public spService: ServiceProviderService) { }
  ngOnInit(): void {
    this.categoryService.getServiceprovidercategories().subscribe((data: any) => {
      setTimeout(() => {
        this.loading = false
      }, 2000);
      this.categoryData = data;
    });
    this.spService.getServiceProviders().subscribe((data: any) => {
      setTimeout(() => {
        this.loading = false
      }, 2000);
      this.sp = data;
      this.stars = data;
    });
  }

  getSPName(cityId: number): string {
    const State = this.city.find(c => c.id === cityId);
    return State ? State.name : '';
  }
  getRatingArray(rating: number): any[] {
    return Array.from({ length: rating });
  }
}
