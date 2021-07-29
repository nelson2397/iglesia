import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralBiblicaComponent } from './pastoral-biblica.component';

describe('PastoralBiblicaComponent', () => {
  let component: PastoralBiblicaComponent;
  let fixture: ComponentFixture<PastoralBiblicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralBiblicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastoralBiblicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
