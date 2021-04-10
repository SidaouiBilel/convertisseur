import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { currencies } from '@src/app/shared/utils/numbers.util';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-tab',
  templateUrl: './add-tab.component.html',
  styleUrls: ['./add-tab.component.scss']
})
export class AddTabComponent implements OnInit {
  myForm: FormGroup;
  currencies = currencies;
  keys = Object.keys;
  constructor(private fb: FormBuilder, private modal: NzModalRef) {
    this.myForm = this.fb.group({
      title: [null, [Validators.required]],
      base: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    for (const i in this.myForm.controls) {
      if (this.myForm.controls[i]) {
        this.myForm.controls[i].markAsDirty();
        this.myForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.myForm.valid) {
      this.modal.close(this.myForm);
    }
  }

}
