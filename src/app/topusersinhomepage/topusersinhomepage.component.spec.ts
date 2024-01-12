import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopusersinhomepageComponent } from './topusersinhomepage.component';

describe('TopusersinhomepageComponent', () => {
  let component: TopusersinhomepageComponent;
  let fixture: ComponentFixture<TopusersinhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopusersinhomepageComponent]
    });
    fixture = TestBed.createComponent(TopusersinhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
