import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagesidecontainesComponent } from './homepagesidecontaines.component';

describe('HomepagesidecontainesComponent', () => {
  let component: HomepagesidecontainesComponent;
  let fixture: ComponentFixture<HomepagesidecontainesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepagesidecontainesComponent]
    });
    fixture = TestBed.createComponent(HomepagesidecontainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
