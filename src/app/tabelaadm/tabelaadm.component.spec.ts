import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaadmComponent } from './tabelaadm.component';

describe('TabelaadmComponent', () => {
  let component: TabelaadmComponent;
  let fixture: ComponentFixture<TabelaadmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaadmComponent]
    });
    fixture = TestBed.createComponent(TabelaadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
