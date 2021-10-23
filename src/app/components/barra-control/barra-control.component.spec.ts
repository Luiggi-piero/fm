import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraControlComponent } from './barra-control.component';

describe('BarraControlComponent', () => {
  let component: BarraControlComponent;
  let fixture: ComponentFixture<BarraControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
