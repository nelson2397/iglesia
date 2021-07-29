import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemploParroquialComponent } from './templo-parroquial.component';

describe('TemploParroquialComponent', () => {
  let component: TemploParroquialComponent;
  let fixture: ComponentFixture<TemploParroquialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemploParroquialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemploParroquialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
