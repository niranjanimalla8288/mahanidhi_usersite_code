import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtopinfracompanyComponent } from './imgtopinfracompany.component';

describe('ImgtopinfracompanyComponent', () => {
  let component: ImgtopinfracompanyComponent;
  let fixture: ComponentFixture<ImgtopinfracompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgtopinfracompanyComponent]
    });
    fixture = TestBed.createComponent(ImgtopinfracompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
