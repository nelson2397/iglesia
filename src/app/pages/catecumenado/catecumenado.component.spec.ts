import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatecumenadoComponent } from './catecumenado.component';

describe('CatecumenadoComponent', () => {
  let component: CatecumenadoComponent;
  let fixture: ComponentFixture<CatecumenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatecumenadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatecumenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
