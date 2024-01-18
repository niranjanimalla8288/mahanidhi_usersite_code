import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvancesearchService } from '../service/advancesearch.service';
import { CityService } from '../service/city.service';
import { ServiceproviderService } from '../service/serviceprovider.service';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { StateService } from '../service/state.service';
import { City } from '../model/city';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { HttpParams } from '@angular/common/http';
import { AdvancedSearchDTO } from '../model/AdvancedSearchDTO';
import { param } from 'jquery';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  SPdata: any[] = [];
  SPdatas: any[] = [];
  Statedata: any[] = [];
  Citydata: any[] = [];
  Maincategorydata: any[] = [];
  selectedValues: any = {};
  receivedParams: any;
  searchTerm: string = '';
  // stateId:any;
  customer: Customer = new Customer();
  stateId: number = 0;
  cityDt: City[] = [];
  cityId: number = 0;
  categoryId: number = 0;
  id: number = 0;
  searchDTO: AdvancedSearchDTO = new AdvancedSearchDTO();
  inputStateId: any;
  inputCityId: any;
  inputCategoryId: any;
  // inputCustomerName: any;
  // inuputCustomerEmail: any;
  // inputCustomerMobile: any;
  // inputLookingFor: any;
  inputSearchString: any;

  searchStateID: any;
  kmRange: number[] = [0, 100];
  localStorageStateId: string | null = null;
  localStorageCityId: string | null = null;
  localStorageCategoryId: string | null = null;
  loading = true;
  constructor(
    public _ServiceProvider: ServiceproviderService,
    public _cityservice: CityService,
    public _serviceAdvancesearch: AdvancesearchService,
    public _stateservice: StateService,
    public _Maincategoryservice: ServiceprovidercategoryService,
    public router: Router, public route: ActivatedRoute,
    public customerService: CustomerService,
    public activateRoute: ActivatedRoute

  ) { }
  onSelectChange(fieldName: string, selectedValue: any) {
    this.selectedValues[fieldName] = selectedValue;
  }

  onRangeChange(event: any): void {
    console.log('Selected KM Range:', this.kmRange);
    // You can perform additional logic based on the selected range
  }
  searchByBusinessName() {
    if (this.selectedValues && this.selectedValues.SearchString) {
      this._serviceAdvancesearch.getAdvancesearch(this.selectedValues).subscribe(
        (data: any) => {
          console.log("After entering into service");
          this.SPdatas = data;
          console.log(this.SPdatas);
        },
        error => console.log(error)
      );
    }
  }
  searchByInput() {
    this._serviceAdvancesearch.getAdvancesearch({
      SearchString: this.searchTerm,
      StateId: 0,
      CityId: 0,
      CategoryId: 0,
      // customerEmail: '',
      // customerMobile: '',
      // customerName: '',
      // lookingFor: ''
    }).subscribe(
      (data: any) => {
        console.log("After entering into service");
        this.SPdatas = data;
        console.log(this.SPdatas);
      },
      error => console.log(error)
    );
  }


  setInputs(stateId: any, cityId: any, categoryId: any, searrchString: any) {
    this.inputStateId = stateId;
    this.inputCityId = cityId;
    this.inputCategoryId = categoryId;
    // this.inputCustomerName = customerName;
    // this.inputCustomerMobile = customerMobile;
    // this.inuputCustomerEmail = customerEmail;
    // this.inputLookingFor = lookingofor;
    this.inputSearchString = searrchString;
  }
  LoadSPsForInput() {
    console.log("params data");
    //console.log(this.activateRoute.params);
    this.activateRoute.queryParamMap.subscribe(params => {
      this.setInputs(
        Number(params.get('StateId')),
        Number(params.get('CityId')),
        Number(params.get('CategoryId')),
        // params.get('customerName'),
        // params.get('customerEmail'),
        // params.get('customerMobile'),
        // params.get('lookingFor'),
        params.get('SearchString')
      );
      this.inputStateId = Number(params.get('StateId'));
      this.inputCityId = Number(params.get('CityId'));
      this.inputCategoryId = Number(params.get('CategoryId'));
      // this.inputCustomerName = params.get('customerName');
      // this.inputCustomerMobile = params.get('customerMobile');
      // this.inuputCustomerEmail = params.get('customerEmail');
      // this.inputLookingFor = params.get('lookingFor');
      this.inputSearchString = params.get('SearchString');
    });


    this._serviceAdvancesearch.getAdvancesearch({
      SearchString: this.inputSearchString,
      StateId: this.inputStateId,
      CityId: this.inputCityId,
      CategoryId: this.inputCategoryId,
      // customerEmail: this.inuputCustomerEmail,
      // customerMobile: this.inputCustomerMobile,
      // customerName: this.inputCustomerName,
      // lookingFor: this.inputLookingFor
    }).subscribe(
      (data: any) => {
        console.log("After entering into service");
        this.SPdatas = data;
        console.log(this.SPdatas, "sp data");
      });
  }

  LoadSPsForSearchFormInput() {
    console.log("params data");
    //console.log(this.activateRoute.params);
    this.activateRoute.queryParamMap.subscribe(params => {
      this.setInputs(
        Number(params.get('StateId')),
        Number(params.get('CityId')),
        Number(params.get('CategoryId')),
        // params.get('customerName'),
        // params.get('customerEmail'),
        // params.get('customerMobile'),
        // params.get('lookingFor'),
        params.get('SearchString')
      );
      this.inputStateId = Number(params.get('StateId'));
      this.inputCityId = Number(params.get('CityId'));
      this.inputCategoryId = Number(params.get('CategoryId'));
      // this.inputCustomerName = params.get('customerName');
      // this.inputCustomerMobile = params.get('customerMobile');
      // this.inuputCustomerEmail = params.get('customerEmail');
      // this.inputLookingFor = params.get('lookingFor');
      this.inputSearchString = params.get('SearchString');
    });


    this._serviceAdvancesearch.getAdvancesearch({
      SearchString: this.inputSearchString,
      StateId: this.inputStateId,
      CityId: this.inputCityId,
      CategoryId: this.inputCategoryId,
      // customerEmail: this.inuputCustomerEmail,
      // customerMobile: this.inputCustomerMobile,
      // customerName: this.inputCustomerName,
      // lookingFor: this.inputLookingFor
    }).subscribe(
      (data: any) => {
        console.log("After entering into service");
        this.SPdatas = data;
        console.log(this.SPdatas, "sp data");
      });
  }

  ngOnInit(): void {
    this.getalldata();
    this._cityservice.getCities().subscribe((data: any) => {
      this.Citydata = data;
    });

    this._stateservice.getStates().subscribe((data: any) => {
      this.Statedata = data;
    });
    this._Maincategoryservice.getServiceprovidercategories().subscribe((data: any) => {
      this.Maincategorydata = data;
    });
    this.LoadSPsForInput();
    this.customer = this.customerService.getCustomerFromLocalStorage() || new Customer();
    console.log(this.customer = this.customerService.getCustomerFromLocalStorage() || new Customer(), "hi local storage data");


    this.localStorageStateId = localStorage.getItem('StateId');
    console.log(this.localStorageStateId, "local sotrage state id");
    this.localStorageCityId = localStorage.getItem('CityId');
    console.log(this.localStorageCityId, "this local city id");
    this.localStorageCategoryId = localStorage.getItem('CategoryId');
    console.log(this.localStorageCategoryId, "This is Local storage Category Id");
  }

  // getLocalStorageData() {
  //   this._serviceAdvancesearch.localStorage().subscribe((data: any) => {
  //     console.log(data, "local storage dagta");
  //   });
  // }
  get() {
    this._ServiceProvider.getServiceProviders().subscribe((data: any) => {
      this.SPdata = data;
      console.log(data)
    })
  }

  getalldata() {
    this._ServiceProvider.getServiceProviders().subscribe((data: any) => {

      console.log(data);
      setTimeout(() => {
        this.loading = false
      }, 2000);
      this.SPdatas = data;
      // this.navigateToAnotherPage();
    })
  }

  getStateName(stateId: number): string {
    const City = this.Statedata.find(c => c.id === stateId);
    return City ? City.name : '';
  }
  getCityName(cityId: number): string {
    const City = this.Citydata.find(c => c.id === cityId);
    return City ? City.name : '';
  }

  getMaincategoryName(mainCategoryId: number): string {
    const City = this.Maincategorydata.find(c => c.id === mainCategoryId);
    return City ? City.name : '';
  }


  // starlength convert to rating

  getratingstar(rating: number): any[] {
    return Array.from({ length: rating })
  }

  OnSelectState() {
    console.log(this.stateId, "On select stateId");
    if (this.stateId) {
      this._stateservice.getCitiesByStateById(this.stateId)
        .subscribe((cities: any) => {
          this.cityDt = cities;
          console.log(this.cityDt);
        });
    } else {
      this.cityDt = [];
    }
  }

  // getRange = (value: string) => {
  //   document.getElementById('rangeValue').innerHTML = value;
  // }

  onSubmitCustomerData() {
    this._serviceAdvancesearch.getAdvancesearch({
      SearchString: this.inputSearchString,
      StateId: this.inputStateId,
      CityId: this.inputCityId,
      CategoryId: this.inputCategoryId,
      // customerEmail: this.inuputCustomerEmail,
      // customerMobile: this.inputCustomerMobile,
      // customerName: this.inputCustomerName,
      // lookingFor: this.inputLookingFor
    }).subscribe(
      (data: any) => {
        console.log("Advance Searching Get Details");
        this.SPdatas = data;
        console.log(this.SPdatas, "sp data");
      });
  }
}

