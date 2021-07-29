import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaMatrimonioComponent } from './familia-matrimonio.component';

describe('FamiliaMatrimonioComponent', () => {
  let component: FamiliaMatrimonioComponent;
  let fixture: ComponentFixture<FamiliaMatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliaMatrimonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaMatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
