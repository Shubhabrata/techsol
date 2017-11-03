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

  fetchServices() {
    return this.http.get('/service/services.json').map(
      (res) => res.json()
    );
  }

  fetchSolutions() {
    return this.http.get('/service/solutions.json').map(
      (res) => res.json()
    );
  }

  fetchProductsHome() {
    return this.http.get('/service/products.json').map(
      (res) => res.json()
    );
  }

  fetchLinks() {
    return this.http.get('/service/links.json').map(
      (res) => res.json()
    );
  }


  constructor(private http: Http) {
  }
  title = "Welcome to Techsol";
}
