import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarlabComponent } from './cadastrarlab.component';

describe('CadastrarlabComponent', () => {
  let component: CadastrarlabComponent;
  let fixture: ComponentFixture<CadastrarlabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarlabComponent]
    });
    fixture = TestBed.createComponent(CadastrarlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
