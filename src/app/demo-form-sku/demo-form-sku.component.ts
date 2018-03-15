import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  id: string;

  constructor(private route: ActivatedRoute) {
    // route.params is an Observable. We can extract the params into hard values using 'subscribe'
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('You submitted value: ', form);
  }

  paramHasValue(): boolean {
    return this.id && this.id.length > 0;
  }
}
