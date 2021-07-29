import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralEducativaComponent } from './pastoral-educativa.component';

describe('PastoralEducativaComponent', () => {
  let component: PastoralEducativaComponent;
  let fixture: ComponentFixture<PastoralEducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralEducativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastoralEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
