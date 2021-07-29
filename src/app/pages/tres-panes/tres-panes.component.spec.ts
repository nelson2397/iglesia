import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresPanesComponent } from './tres-panes.component';

describe('TresPanesComponent', () => {
  let component: TresPanesComponent;
  let fixture: ComponentFixture<TresPanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresPanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
