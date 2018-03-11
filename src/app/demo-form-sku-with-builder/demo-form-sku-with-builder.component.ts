import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  // There are 2 main functions in FormBuilder
  // 1. control - creates a new FormControl
  // 2. group - creates a new FormGroup
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])],
      'firstName': ['', Validators.required],
      'productName': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    // To watch for changes on a control:
    // 1. Get access to the EventEmitter by calling control.valueChanges
    // 2. Add an observer by calling subscribe method
    this.sku.valueChanges.subscribe((value: string) => {
      console.log(`Value of sku changes to: ${value}`);
    });
  }

  // To use validators, 2 things need to be done:
  // 1. Assign a validator to the FormControl object
  // 2. Check the status of the validator in the VIEW and take action accordingly

  ngOnInit() {
  }

  onSubmit(value: JSON) {
    console.log('Values entered: ' + JSON.stringify(value));
  }

  // A validator takes as its input a FormControl, and returns a StringMap<string, boolean>
  // where the key is "error code" and the value is true if it fails.
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }
}
