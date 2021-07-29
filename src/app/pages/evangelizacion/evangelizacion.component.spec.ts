import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelizacionComponent } from './evangelizacion.component';

describe('EvangelizacionComponent', () => {
  let component: EvangelizacionComponent;
  let fixture: ComponentFixture<EvangelizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvangelizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
