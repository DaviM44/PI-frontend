import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatabelaComponent } from './novatabela.component';

describe('NovatabelaComponent', () => {
  let component: NovatabelaComponent;
  let fixture: ComponentFixture<NovatabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovatabelaComponent]
    });
    fixture = TestBed.createComponent(NovatabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
