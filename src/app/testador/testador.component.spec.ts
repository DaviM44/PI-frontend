import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadorComponent } from './testador.component';

describe('TestadorComponent', () => {
  let component: TestadorComponent;
  let fixture: ComponentFixture<TestadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestadorComponent]
    });
    fixture = TestBed.createComponent(TestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
