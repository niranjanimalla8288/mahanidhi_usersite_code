import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../service/organization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  organizationData: any;
  constructor(public organizationService: OrganizationService) { }
  ngOnInit(): void {
    this.organizationService.getOrganizationDetails().subscribe((data: any) => {
      this.organizationData = data;
    });
  }

}
