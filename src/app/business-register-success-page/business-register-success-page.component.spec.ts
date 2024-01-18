import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRegisterSuccessPageComponent } from './business-register-success-page.component';

describe('BusinessRegisterSuccessPageComponent', () => {
  let component: BusinessRegisterSuccessPageComponent;
  let fixture: ComponentFixture<BusinessRegisterSuccessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRegisterSuccessPageComponent]
    });
    fixture = TestBed.createComponent(BusinessRegisterSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
