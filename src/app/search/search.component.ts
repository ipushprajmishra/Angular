import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  productService=inject(ProductService);

  searchedProduct:undefined | Product[];

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');

    query && this.productService.searchProducts(query)
    .subscribe((result)=>{
      console.log(result);
      this.searchedProduct=result;
    })
    console.log(query);
  }
}
