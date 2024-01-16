import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../service/organization.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  organizationDetails: any;
  constructor(public organizationService: OrganizationService) { }
  ngOnInit(): void {
    this.organizationService.getOrganizationDetails().subscribe((data: any) => {
      console.log(data, "Organization Data");
      this.organizationDetails = data;
    });
  }

}
