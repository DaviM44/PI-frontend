import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmloginComponent } from './admlogin.component';

describe('AdmloginComponent', () => {
  let component: AdmloginComponent;
  let fixture: ComponentFixture<AdmloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmloginComponent]
    });
    fixture = TestBed.createComponent(AdmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
