import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  fetchHome() {
    return this.http.get('/service/home.json').map(
      (res) => res.json()
    );
  }

  fetchProducts() {
    return this.http.get('/service/products.json').map(
      (res) => res.json()
    );
  }

  fetchProductsHome() {
    return this.http.get('/service/products.json').map(
      (res) => res.json()
    );
  }

  constructor(private http: Http) { 
  }
  title = "Welcome to Techsol";
}
