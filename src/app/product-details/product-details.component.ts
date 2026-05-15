import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);
  productService = inject(ProductService);

  product: undefined | Product;
  quantity: number = 1;
  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    if (productId) {
      this.productService.getProduct(productId).subscribe((result: Product) => {
        this.product = result;
      });
    }
  }

  IncreaseQuantity() {
    if (this.product) {
      this.quantity = this.quantity + 1;
    }
  }

  DecreaseQuantity() {
    if (this.product && this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }
}
