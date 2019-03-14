import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormServices {
  constructor(private _formBuilder: FormBuilder) {}

  public serviceForm() {
    return this._formBuilder.group({
      category: ['salud', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
