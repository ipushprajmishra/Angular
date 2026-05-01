import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {


  products: undefined | Product[] = [];
  deleteProductMessage: string = '';
  icon=faTrash;
  editIcon=faEdit;
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
  this.reloadProducts();
  }

  reloadProducts()
  {
      this.productService.getproducts()
      .subscribe((result: Product[]) => {
        this.products = result;
      });
  }



  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe((result: any) => {
        if (result) {
          this.deleteProductMessage = 'Product has been deleted.';
            this.reloadProducts();
        }

        setTimeout(() => {
          this.deleteProductMessage = '';
        }, 1500)
      })
  }
}
