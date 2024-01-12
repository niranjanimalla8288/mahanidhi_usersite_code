import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentspostsComponent } from './recentsposts.component';

describe('RecentspostsComponent', () => {
  let component: RecentspostsComponent;
  let fixture: ComponentFixture<RecentspostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentspostsComponent]
    });
    fixture = TestBed.createComponent(RecentspostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
