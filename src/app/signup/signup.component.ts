import { Component, OnInit } from '@angular/core';
import { BusinessRegistration } from '../model/business-registration';
import { BusinessRegistrationService } from '../service/business-registration.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceProviderService } from '../service/service-provider.service';
import { Serviceprovider } from '../model/serviceprovider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  businessModel: BusinessRegistration = new BusinessRegistration();
  loading = false;
  serviceProviderModel: Serviceprovider = new Serviceprovider();
  constructor(public service: BusinessRegistrationService,
    public router: Router,

    private toaster: ToastrService, public serviceProvider: ServiceProviderService) { }
  ngOnInit(): void {

  }
  onSubmit() {
    this.service.businesPost(this.businessModel).subscribe(data => {
      setTimeout(() => {
        this.loading = true
      }, 2000);
      this.toaster.success('Successfully Register Your Details', 'Business Registration');
      this.router.navigate(["/businnes-register-success"]);
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
