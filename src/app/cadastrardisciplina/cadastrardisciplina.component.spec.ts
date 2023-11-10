import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrardisciplinaComponent } from './cadastrardisciplina.component';

describe('CadastrardisciplinaComponent', () => {
  let component: CadastrardisciplinaComponent;
  let fixture: ComponentFixture<CadastrardisciplinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrardisciplinaComponent]
    });
    fixture = TestBed.createComponent(CadastrardisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
