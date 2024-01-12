import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderecentpostsComponent } from './siderecentposts.component';

describe('SiderecentpostsComponent', () => {
  let component: SiderecentpostsComponent;
  let fixture: ComponentFixture<SiderecentpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiderecentpostsComponent]
    });
    fixture = TestBed.createComponent(SiderecentpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
