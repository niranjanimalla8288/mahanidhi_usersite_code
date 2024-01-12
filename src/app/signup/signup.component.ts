import { Component, OnInit } from '@angular/core';
import { BusinessRegistration } from '../model/business-registration';
import { BusinessRegistrationService } from '../service/business-registration.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceProviderService } from '../service/service-provider.service';
import { Serviceprovider } from '../model/serviceprovider';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  businessModel: BusinessRegistration = new BusinessRegistration();
  serviceProviderModel: Serviceprovider = new Serviceprovider();
  constructor(public service: BusinessRegistrationService, private toaster: ToastrService, public serviceProvider: ServiceProviderService) { }
  ngOnInit(): void {

  }
  onSubmit() {
    this.service.businesPost(this.businessModel).subscribe(data => {
      this.toaster.success('Successfully Register Your Details', 'Business Registration');
      console.log("Successfully Register Business Data", data);
    });
  }


  // onSubmit() {
  //   this.serviceProvider.createServiceProvider(this.serviceProviderModel).subscribe((data: any) => {
  //     this.toaster.success("Your Details Successfully Submited");
  //     console.log(data);
  //   });
  // }
}
