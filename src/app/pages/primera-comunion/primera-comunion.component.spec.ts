import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraComunionComponent } from './primera-comunion.component';

describe('PrimeraComunionComponent', () => {
  let component: PrimeraComunionComponent;
  let fixture: ComponentFixture<PrimeraComunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraComunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
