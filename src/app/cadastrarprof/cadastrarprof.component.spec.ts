import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarprofComponent } from './cadastrarprof.component';

describe('CadastrarprofComponent', () => {
  let component: CadastrarprofComponent;
  let fixture: ComponentFixture<CadastrarprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarprofComponent]
    });
    fixture = TestBed.createComponent(CadastrarprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
