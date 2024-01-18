import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../service/organization.service';
import { Contacts } from '../model/contacts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactsService } from '../service/contacts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  contact: Contacts = new Contacts();
  organizationDetails: any;
  loading = true;
  constructor(public organizationService: OrganizationService,
    public _toasterService: ToastrService,
    public router: Router,
    public _fb: FormBuilder, public _contactService: ContactsService) {
    this.contactForm = this._fb.group({
      id: '0',
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  }
  ngOnInit(): void {
    this.organizationService.getOrganizationDetails().subscribe((data: any) => {
      console.log(data, "Organization Data");
      setTimeout(() => {
        this.loading = false
      }, 2000);
      this.organizationDetails = data;
    });
  }

  onSubmit() {
    this._contactService.createContact(this.contactForm.value).subscribe((data: any) => {
      this._toasterService.success("Successfully Send Your Cantact Details");
      this.router.navigate(['/businnes-register-success']);
      this.contactForm.reset();

    });
  }
}
