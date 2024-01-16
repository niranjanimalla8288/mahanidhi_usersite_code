import { Component } from '@angular/core';
import { Serviceprovider } from '../model/serviceprovider';
import { ServiceProviderService } from '../service/service-provider.service';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { __makeTemplateObject } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { ServiceproviderService } from '../service/serviceprovider.service';
import { data } from 'jquery';

@Component({
  selector: 'app-featuredbusinessposts',
  templateUrl: './featuredbusinessposts.component.html',
  styleUrls: ['./featuredbusinessposts.component.css']
})
export class FeaturedbusinesspostsComponent {
  serviceProviders: Serviceprovider[] = [];
  mainCategoryIdToCount: number = 1; // Replace with the actual MainCategoryId you want to count
  mainCategoryIdCount: number = 0;

  stars: Serviceprovider[] = [];
  infraDeveloperCount: number = 0;
  HospitalCount: number = 0;
  category: any;
  // items: Serviceprovider[] = [];
  categoryByServiceProvider: any[] = [];
  categoryIdToCount: number = 1;
  id: number = 0;
  mainCategoryCounts: any[] = [];
  constructor(public router: ActivatedRoute, private SpService: ServiceProviderService, private _serviceProviderService: ServiceproviderService, public serviceCategory: ServiceprovidercategoryService) { }

  ngOnInit(): void {
    this._serviceProviderService.getServiceProviderCategoryCount().subscribe((data: any) => {
      this.mainCategoryCounts = data;
      console.log(data, "count")
    });
    // console.log(this.countProductsByCategoryId, "get data");
    this.SpService.getServiceProviders().subscribe((data: any) => {
      this.stars = data;
      this.calculateInfraDeveloperCount();
      this.calculateHospitalCount();
    });
    this.getCategory();

    this.serviceCategory.getServiceprovidercategories().subscribe(
      (data: any) => {
        this.serviceProviders = data;
        // this.countMainCategoryId();
      },
      error => {
        console.error('Error fetching service providers:', error);
      }
    );

    this.countProductsByCategoryId;


  }

  // countMainCategoryId(): void {
  //   this.mainCategoryIdCount = this.serviceProviders.filter(provider => provider.mainCategoryId === this.mainCategoryIdToCount).length;
  // }
  countProductsByCategoryId(mainCategoryId: number): number {
    return this.stars.filter(product => product.mainCategoryId === mainCategoryId).length;
  }

  countCategory(mainCategoryId: number) {
    return this.stars.filter(c => c.id === mainCategoryId).length;
  }

  getCategory() {
    this.serviceCategory.getServiceprovidercategories().subscribe((data: any) => {
      this.category = data;
    });
  }

  // getCategoryByServiceIdDATA() {
  //   this.serviceCategory.getServiceProvidertoCategoryIdData(this.id).subscribe((data: any) => {
  //     this.categoryByServiceProvider = data;
  //   });
  // }
  // countItemsByCategoryId(): number {
  //   return this.categoryByServiceProvider.filter(item => item.mainCategoryId === this.categoryIdToCount).length;
  // }
  private calculateInfraDeveloperCount(): void {
    this.infraDeveloperCount = this.stars.filter(s => s.businessName.toLowerCase() === 'top infra company').length;
  }
  private calculateHospitalCount(): void {
    this.HospitalCount = this.stars.filter(s => s.businessName.toLowerCase() === 'electric business').length;
  }

  getMainCategoryIdbyName(mainCategoryId: number): string {
    const Category = this.mainCategoryCounts.find(c => c.id === mainCategoryId);
    return Category ? Category.name : ''
  }
}
