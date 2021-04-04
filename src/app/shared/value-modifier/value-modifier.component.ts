import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-value-modifier',
  templateUrl: './value-modifier.component.html',
  styleUrls: ['./value-modifier.component.scss']
})
export class ValueModifierComponent implements OnInit {
  visible = false;
  form: FormGroup;
  @Input() title;
  @Input() tooltip;
  @Input() icon;
  @Output() save: EventEmitter<number> = new EventEmitter<number>();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    for (const i in this.form.controls) {
      if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
      }
    }
  }

  onSave(): void {
    this.submitForm();
    if (this.form.valid) {
      this.save.emit(this.form.controls.value.value);
      this.visible = false;
    }
  }

}
