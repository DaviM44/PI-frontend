import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarcursoComponent } from './cadastrarcurso.component';

describe('CadastrarcursoComponent', () => {
  let component: CadastrarcursoComponent;
  let fixture: ComponentFixture<CadastrarcursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarcursoComponent]
    });
    fixture = TestBed.createComponent(CadastrarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
