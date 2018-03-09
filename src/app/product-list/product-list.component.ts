import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // The set of input + output bindings is the PUBLIC API of the component

  // Usage: [productList]
  // The [squareBrackets] pass inputs
  // Data flows INTO the component via input bindings
  @Input() productList: Product[]; // The Product passed to this component

  // Usage: (productSelected)
  // The (parentheses) handle outputs
  // Events flow OUT OF the component through output bindings
  @Output() productSelected: EventEmitter<Product>; // Outputs the current product when a new Product is selected

  // Local state containing the currently selected Product.
  currentProduct: Product;

  // When we create a new component, we can expose "public events" (component outputs)
  // that allow the component to talk to the outside world
  // 3 things need to be done:
  // a. Specify outputs in the @Component configuration
  // b. Attach an EventEmitter to the output property
  // c. Emit an event from the EventEmitter at the right time.

  constructor() {
    this.productSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }
}
