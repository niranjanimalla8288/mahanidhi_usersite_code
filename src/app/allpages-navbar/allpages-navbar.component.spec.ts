import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpagesNavbarComponent } from './allpages-navbar.component';

describe('AllpagesNavbarComponent', () => {
  let component: AllpagesNavbarComponent;
  let fixture: ComponentFixture<AllpagesNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllpagesNavbarComponent]
    });
    fixture = TestBed.createComponent(AllpagesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
