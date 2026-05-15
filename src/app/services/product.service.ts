import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(data: Product) {
    console.warn('service called');
    return this.http.post('http://localhost:3000/products', data, {
      observe: 'response',
    });
  }

  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: string): any {
    return this.http.delete('http://localhost:3000/products/' + id);
  }

  getProduct(id: string): any {
    return this.http.get('http://localhost:3000/products/' + id);
  }

  updateProduct(data: Product) {
    return this.http.put('http://localhost:3000/products/' + data.id, data, {
      observe: 'response',
    });
  }

  popularProducts() {
    return this.http.get<Product[]>(
      'http://localhost:3000/products/?_per_page=2',
    );
  }

  trendyProducts() {
    return this.http.get<Product[]>(
      'http://localhost:3000/products/?_per_page=8',
    );
  }

  searchProducts(query:string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/products/?name:contains=${query}`,
    );
  }
}
