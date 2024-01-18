import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../service/organization.service';

@Component({
  selector: 'app-business-register-success-page',
  templateUrl: './business-register-success-page.component.html',
  styleUrls: ['./business-register-success-page.component.css']
})
export class BusinessRegisterSuccessPageComponent implements OnInit {

  orgData: any;
  constructor(private _orgService: OrganizationService) { }


  ngOnInit(): void {
    this._orgService.getOrganizationDetails().subscribe((data: any) => {
      this.orgData = data;
    });
  }

}
