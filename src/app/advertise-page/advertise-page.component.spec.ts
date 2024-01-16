import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisePageComponent } from './advertise-page.component';

describe('AdvertisePageComponent', () => {
  let component: AdvertisePageComponent;
  let fixture: ComponentFixture<AdvertisePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisePageComponent]
    });
    fixture = TestBed.createComponent(AdvertisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
