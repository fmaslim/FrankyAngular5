import { Component, OnInit } from '@angular/core';


// FormsModule gives us Template-driven directives, such as:
// ngModel and ngForm

// ReactiveFormsModule gives us directives, such as:
// formControl and formGroup

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('You submitted value: ', form);
  }
}
