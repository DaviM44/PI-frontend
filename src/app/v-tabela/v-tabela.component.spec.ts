import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTabelaComponent } from './v-tabela.component';

describe('VTabelaComponent', () => {
  let component: VTabelaComponent;
  let fixture: ComponentFixture<VTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VTabelaComponent]
    });
    fixture = TestBed.createComponent(VTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
