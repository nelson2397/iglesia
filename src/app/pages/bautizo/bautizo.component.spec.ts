import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BautizoComponent } from './bautizo.component';

describe('BautizoComponent', () => {
  let component: BautizoComponent;
  let fixture: ComponentFixture<BautizoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BautizoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BautizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
