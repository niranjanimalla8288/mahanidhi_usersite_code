import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdvancesearchService } from '../service/advancesearch.service';
import { CityService } from '../service/city.service';
import { ServiceproviderService } from '../service/serviceprovider.service';
import { StateService } from '../service/state.service';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { HttpClient } from '@angular/common/http';
import { State } from '../model/state';
import { City } from '../model/city';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { AdvancedSearchDTO } from '../model/AdvancedSearchDTO';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homeadvancedsearch',
  templateUrl: './homeadvancedsearch.component.html',
  styleUrls: ['./homeadvancedsearch.component.css']
})
export class HomeadvancedsearchComponent implements OnInit {

  @ViewChild('btnModelClose')
  closebutton!: { nativeElement: { click: () => void; }; };
  isMenuOpened: boolean = false;
  // cityId: string = "";
  SPdata: any[] = [];
  SPdatas: any[] = [];
  Statedata: any[] = [];
  Citydata: any[] = [];
  CitydatabyId: any[] = [];
  Maincategorydata: any[] = [];
  selectedValues: any = {};
  stateId: number = 0;
  cityId: number = 0;
  categoryId: number = 0;
  customer: Customer = new Customer();
  stateDt: State = new State();
  cityDt: City[] = [];
  selectedState: string = '';
  selectedCity: string = '';
  states: State[] = [];
  citiesData: City[] = [];
  search: AdvancedSearchDTO = new AdvancedSearchDTO();

  constructor(public _ServiceProvider: ServiceproviderService,
    public _cityservice: CityService,
    public _serviceAdvancesearch: AdvancesearchService,
    public _stateservice: StateService,
    public _Maincategoryservice: ServiceprovidercategoryService,
    public customerService: CustomerService,
    private _toaster: ToastrService,
    public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.get();
    this._cityservice.getCities().subscribe((data: any) => {
      this.citiesData = data;
    });

    this._stateservice.getStates().subscribe((data: any) => {
      this.Statedata = data;
    });
    this._Maincategoryservice.getServiceprovidercategories().subscribe((data: any) => {
      this.Maincategorydata = data;
    });

  }

  get() {
    this._ServiceProvider.getServiceProviders().subscribe((data: any) => {
      this.SPdata = data;
      console.log(data)
    })
  }

  onSelectChange(fieldName: string, selectedValue: any) {
    this.selectedValues[fieldName] = selectedValue;
  }

  navigateToAnotherPage() {
    console.log("Sending data");
    console.log(this.search);

    this.router.navigate(['/advancedsearch'], { queryParams: this.search });
  }

  cityGetById(id: number) {
    this._cityservice.getCityById(id).subscribe((data: any) => {
      this.CitydatabyId = data;
    });
  }


  OnSelectState() {
    console.log(this.stateId);
    if (this.search.StateId) {
      this._stateservice.getCitiesByStateById(this.search.StateId)
        .subscribe((cities: any) => {
          this.cityDt = cities;
          console.log(this.cityDt);
        });
    } else {
      this.cityDt = [];
    }
  }



  // user details send method

  onSubmitCustomerData() {
    localStorage.setItem('StateId', this.search.StateId.toString());
    localStorage.setItem('CityId', this.search.CityId.toString());
    localStorage.setItem('CategoryId', this.search.CategoryId.toString());
    // this.Closebtn();
    document.getElementById('btnModelClsoe')?.click();
    this.navigateToAnotherPage();

  }
  searchSubmit() {
    localStorage.setItem('StateId', this.search.StateId.toString());
    localStorage.setItem('CityId', this.search.CityId.toString());
    localStorage.setItem('CategoryId', this.search.CategoryId.toString());
  }
  saveCustomer(): void {
    // Save customer to local storage
    this.customerService.saveCustomerToLocalStorage(this.customer);
  }

  clearLocalStorage(): void {
    // Clear local storage
    this.customerService.clearLocalStorage();
    this.customer = new Customer(); // Optionally reset the customer object in your component
  }


  Closebtn() {
    // this.closebutton.nativeElement.click();
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
