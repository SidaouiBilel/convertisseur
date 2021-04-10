import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesContainerComponent } from './rates-container.component';

describe('RatesContainerComponent', () => {
  let component: RatesContainerComponent;
  let fixture: ComponentFixture<RatesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
