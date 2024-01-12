import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../model/contacts';
import { Serviceprovider } from '../model/serviceprovider';
import { CityService } from '../service/city.service';
import { ContactsService } from '../service/contacts.service';
import { ServiceProviderService } from '../service/service-provider.service';
import { ViewCounterService } from '../service/view-counter.service';

@Component({
  selector: 'app-imgtopinfracompany',
  templateUrl: './imgtopinfracompany.component.html',
  styleUrls: ['./imgtopinfracompany.component.css']
})
export class ImgtopinfracompanyComponent implements OnInit {
  contact: Contacts = new Contacts();
  serviceProvider: Serviceprovider = new Serviceprovider();
  id: number = 0;
  city: any[] = [];
  // stars: Serviceprovider[] = [];
  constructor(
    private route: ActivatedRoute, private viewCounterService: ViewCounterService,
    private serviceProviderService: ServiceProviderService, private cityService: CityService,
    private contactService: ContactsService, private router: Router
  ) { }
  ngOnInit(): void {
    this.loadServiceProvider();
    this.cityService.getCities().subscribe((data: any) => {
      this.city = data
    });

  }
  //  getViewCount(id: number): number {
  //     return this.viewsMap.get(id) || 0;
  //   }
  loadServiceProvider(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceProviderService.getServiceProviderById(this.id).subscribe((data: any) => {
      this.serviceProvider = data;
      console.log(data);
      this.viewCounterService.incrementViewCount(this.serviceProvider.id);
    },
      (error) => {
        console.error('Error loading service provider:', error);
      }
    );
  }
  getSPName(cityId: number): string {
    const State = this.city.find(c => c.id === cityId);
    return State ? State.name : '';
  }
  getRatingArray(rating: number): any[] {
    return Array.from({ length: rating });
  }

  getViewCount(): number {
    return this.viewCounterService.getViewCount(this.serviceProvider.id);
  }
  onSubmit() {
    this.contactService.createContact(this.contact).subscribe((data: any) => {
      this.contact = data;
      this.router.navigate(['/main-home']);
    });
  }
}
