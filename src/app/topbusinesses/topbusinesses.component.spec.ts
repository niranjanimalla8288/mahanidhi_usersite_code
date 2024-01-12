import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbusinessesComponent } from './topbusinesses.component';

describe('TopbusinessesComponent', () => {
  let component: TopbusinessesComponent;
  let fixture: ComponentFixture<TopbusinessesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbusinessesComponent]
    });
    fixture = TestBed.createComponent(TopbusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
