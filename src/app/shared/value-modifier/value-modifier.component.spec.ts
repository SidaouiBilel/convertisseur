import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueModifierComponent } from './value-modifier.component';

describe('ValueModifierComponent', () => {
  let component: ValueModifierComponent;
  let fixture: ComponentFixture<ValueModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
