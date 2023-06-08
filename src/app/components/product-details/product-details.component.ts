import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from 'src/assets/products.json';
import { Product } from '../interface/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  products: Product[] = data;

  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.productDetails = this.products.find(
      (product: any) => product.id == this.activatedRoute.snapshot.params['id']
    );
  }
}
