import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaridadComponent } from './caridad.component';

describe('CaridadComponent', () => {
  let component: CaridadComponent;
  let fixture: ComponentFixture<CaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
