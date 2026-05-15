import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  productService = inject(ProductService);
  searchedResult: undefined | Product[] = [];
  menuType: string = 'default';
  sellerName: string = '';
  userName:string='';

  ngOnInit(): void {
    this.router.events.subscribe((result: any) => {
      if (result.url) {
        if (
          localStorage.getItem('sellerLogin') &&
          result.url.includes('seller')
        ) {
          this.menuType = 'seller';
          let sellerdetails = localStorage.getItem('sellerLogin');
          if (sellerdetails) {
            this.sellerName = JSON.parse(sellerdetails)[0].name;
          }
        } else if (localStorage.getItem('user')) {
          let userdetails = localStorage.getItem('user');
          if (userdetails) {
            this.userName = JSON.parse(userdetails)[0].name;
            this.menuType='user';
          }
        } else {
          this.menuType = 'default';
        }
      }
    });
    this.menuType = 'default';
  }

  Logout() {
    localStorage.removeItem('sellerLogin');
     localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  searchProducts(search: KeyboardEvent) {
    const searchEl = search.target as HTMLTextAreaElement;
    this.productService.searchProducts(searchEl.value).subscribe((result) => {
      console.log(result);
      this.searchedResult = result;
    });
  }

  searchProductSubmit(search: string) {
    this.router.navigate(['seller-search', search]);
  }
}
