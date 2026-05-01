import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  router=inject(Router);
  product: Product | null = null;

  ngOnInit(): void {
    let productid = this.activatedRoute.snapshot.paramMap.get('id');
    console.warn(productid);
    if (productid) {
      this.productService.getProduct(productid)
        .subscribe((result: Product) => {
          this.product = result;
        });
    }

  }



  updateProductMessage: string = '';

  Updateproduct(data: Product) {
    this.productService.updateProduct(data)
      .subscribe((result)=>{
        this.updateProductMessage='product has been updated successfully.'


        setTimeout(() => {
          this.updateProductMessage='';
this.router.navigate(['seller-home']);
        }, 1500);
      });
    console.log(data);
  }
}
