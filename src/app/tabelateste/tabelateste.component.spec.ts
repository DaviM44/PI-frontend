import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelatesteComponent } from './tabelateste.component';

describe('TabelatesteComponent', () => {
  let component: TabelatesteComponent;
  let fixture: ComponentFixture<TabelatesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelatesteComponent]
    });
    fixture = TestBed.createComponent(TabelatesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
