import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-inventory-root',
  templateUrl: './inventory-root.component.html',
  styleUrls: ['./inventory-root.component.css']
})
export class InventoryRootComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      new Product('MYSHOES', // SKU
                  'Black Running Shoes', // Name
                  '', // Image URL
                  ['Men', 'Shoes', 'Running Shoes'], // Department
                  109.99), // Price
      new Product('NEATOJACKET', // SKU
                  'Blue Jacket', // Name
                  '', // Image URL
                  ['Women', 'Apparel', 'Jackets & Vests'], // Department
                  239.99), // Price
      new Product('NICEHAT', // SKU
                  'A Nice Black Hat', // Name
                  '', // Image URL
                  ['Men', 'Accessories', 'Hats'], // Department
                  29.99), // Price
    ];
  }

  ngOnInit() {
  }

  productWasSelected(product: Product) {
    alert('Inside InventoryRootComponent');
    console.log('Product clicked: ' + product);
  }
}
