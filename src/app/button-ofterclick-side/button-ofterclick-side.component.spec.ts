import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOfterclickSideComponent } from './button-ofterclick-side.component';

describe('ButtonOfterclickSideComponent', () => {
  let component: ButtonOfterclickSideComponent;
  let fixture: ComponentFixture<ButtonOfterclickSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonOfterclickSideComponent]
    });
    fixture = TestBed.createComponent(ButtonOfterclickSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
