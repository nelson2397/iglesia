import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolemnidadesComponent } from './solemnidades.component';

describe('SolemnidadesComponent', () => {
  let component: SolemnidadesComponent;
  let fixture: ComponentFixture<SolemnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolemnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolemnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
