import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometoplocationsComponent } from './hometoplocations.component';

describe('HometoplocationsComponent', () => {
  let component: HometoplocationsComponent;
  let fixture: ComponentFixture<HometoplocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HometoplocationsComponent]
    });
    fixture = TestBed.createComponent(HometoplocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
