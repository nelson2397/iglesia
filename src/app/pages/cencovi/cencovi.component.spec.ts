import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CencoviComponent } from './cencovi.component';

describe('CencoviComponent', () => {
  let component: CencoviComponent;
  let fixture: ComponentFixture<CencoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CencoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CencoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
