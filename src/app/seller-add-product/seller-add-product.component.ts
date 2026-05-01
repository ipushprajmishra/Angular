import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {


  name: string = ''

  productService = inject(ProductService);
addProductMessage:string='';
  Addproduct(formData: Product): void {
    console.log(formData);
    this.productService.addProduct(formData)
    .subscribe((result)=>{
      if(result)
      {
this.addProductMessage='Product has been added.';
      }

      setTimeout(()=>{
this.addProductMessage='';
      },3000)
    });


  }
}
