import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AddsService } from '../service/adds.service';
import { OrganizationService } from '../service/organization.service';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent implements OnInit {

  localStorageStateId: number = 0;
  localStorageCityId: number = 0;
  localStorageCategoryId: number = 0;
  addModelData: any[] = [];
  id: any;
  orgData: any;
  constructor(public _addsService: AddsService, public _orgService: OrganizationService) { }
  ngOnInit(): void {
    this._addsService.getAddsDataCategoryById(this.localStorageCityId, this.localStorageCategoryId).subscribe((data: any) => {
      console.log(data, "Adds Data");
      this.addModelData = data
    });
    this._orgService.getOrganizationDetails().subscribe((data: any) => {
      this.orgData = data;
    });
  }
  // constructor(private router: Router) { }
  // clearRouteParamsAndNavigate() {
  //   const navigationExtras: NavigationExtras = {
  //     replaceUrl: true,
  //     queryParams: {}
  //   };
  //   this.router.navigate(['/alloffers'], navigationExtras);

  // }

  // navigateToNewPage() {
  //   this.router.navigate(['/alloffers'], { replaceUrl: true });
  // }
}
