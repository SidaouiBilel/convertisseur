import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterRatioComponent } from './converter-ratio.component';

describe('ConverterRatioComponent', () => {
  let component: ConverterRatioComponent;
  let fixture: ComponentFixture<ConverterRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
