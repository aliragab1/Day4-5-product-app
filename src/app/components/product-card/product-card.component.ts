import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productList!: Product;
  constructor(private router: Router) {}
  redirectToDetails() {
    this.router.navigate(['product-details', this.productList.id]);
  }
}
