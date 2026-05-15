import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  productService=inject(ProductService);
  popularProducts: undefined | Product[];
trendyProducts: undefined | Product[];
  ngOnInit()
  {
    this.productService.popularProducts().subscribe((result)=>{
      this.popularProducts=result;
    })
 this.productService.trendyProducts().subscribe((result)=>{
      this.trendyProducts=result;
    })

    
  }
}
