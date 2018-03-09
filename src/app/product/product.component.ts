import { Component, OnInit, Input, HostBinding } from '@angular/core';

export class Product {
  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string[],
              public price: number) {
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
