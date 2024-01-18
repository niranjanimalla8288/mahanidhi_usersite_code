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
  // sp: any[] = [];
  city: any[] = [];
  stars: Serviceprovider[] = [];
  categoryData: any;
  categoryCount: number = 0;
  filterProduct: any;
  allProducts: any;
  searchFilter = ''
  searchTerm: string = '';
  filteredCategoryData: any;
  serviceProviderData: any;
  ngOnInit(): void {
    this.spService.getServiceProviders().subscribe((data: any) => {
      this.serviceProviderData = data;
      this.stars = data;
      this.filterProduct = data;
      this.allProducts = data;
      this.filteredCategoryData = data;
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

  // filterProducts() {
  //   this.filterProduct = this.allProducts.filter(
  //     (p: any) => {
  //       return p.title.includes(this.searchFilter)
  //     }
  //   )
  // }

  applyFilter() {
    if (this.searchTerm.trim() !== '') {
      // Convert search term to lowercase for case-insensitive search
      const searchTermLower = this.searchTerm.toLowerCase();

      // Filter the categoryData based on the search term
      this.filteredCategoryData = this.serviceProviderData.filter((category: any) =>
        category.businessName.toLowerCase().includes(searchTermLower)
      );
    }
    else {
      this.filteredCategoryData = this.serviceProviderData;
    }
  }
}
