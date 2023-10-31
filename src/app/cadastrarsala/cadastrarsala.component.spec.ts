import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarsalaComponent } from './cadastrarsala.component';

describe('CadastrarsalaComponent', () => {
  let component: CadastrarsalaComponent;
  let fixture: ComponentFixture<CadastrarsalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarsalaComponent]
    });
    fixture = TestBed.createComponent(CadastrarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
