import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from '../service/service-provider.service';
import { CityService } from '../service/city.service';
import { Serviceprovider } from '../model/serviceprovider';

@Component({
  selector: 'app-recentsposts',
  templateUrl: './recentsposts.component.html',
  styleUrls: ['./recentsposts.component.css']
})
export class RecentspostsComponent implements OnInit {
  constructor(private spService: ServiceProviderService, private cityService: CityService) { }
  serviceProviderData: any[] = [];
  city: any[] = [];
  stars: Serviceprovider[] = [];

  ngOnInit(): void {
    this.spService.getServiceProviders().subscribe((data: any) => {
      this.serviceProviderData = data;
      this.stars = data;
    });
    this.cityService.getCities().subscribe((data: any) => {
      this.city = data
    });
  }
  getSPName(cityId: number): string {
    const State = this.city.find(c => c.id === cityId);
    return State ? State.name : '';
  }
}
