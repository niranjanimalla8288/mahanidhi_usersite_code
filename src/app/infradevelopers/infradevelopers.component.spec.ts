import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfradevelopersComponent } from './infradevelopers.component';

describe('InfradevelopersComponent', () => {
  let component: InfradevelopersComponent;
  let fixture: ComponentFixture<InfradevelopersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfradevelopersComponent]
    });
    fixture = TestBed.createComponent(InfradevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
