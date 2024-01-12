import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedbusinesspostsComponent } from './featuredbusinessposts.component';

describe('FeaturedbusinesspostsComponent', () => {
  let component: FeaturedbusinesspostsComponent;
  let fixture: ComponentFixture<FeaturedbusinesspostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedbusinesspostsComponent]
    });
    fixture = TestBed.createComponent(FeaturedbusinesspostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
