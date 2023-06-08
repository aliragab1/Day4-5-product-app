import { Component } from '@angular/core';
import data from 'src/assets/products.json';
import { Product } from '../interface/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: Product[] = data; // product[] => using interface
}
