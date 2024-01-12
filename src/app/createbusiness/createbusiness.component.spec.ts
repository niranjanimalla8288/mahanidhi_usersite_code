import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusinessComponent } from './createbusiness.component';

describe('CreatebusinessComponent', () => {
  let component: CreatebusinessComponent;
  let fixture: ComponentFixture<CreatebusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatebusinessComponent]
    });
    fixture = TestBed.createComponent(CreatebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
