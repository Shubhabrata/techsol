import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'TS-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  private products;
  public product;
  private sub: any;
  private name;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.name = params['name'];
      this.apiService.fetchProducts().subscribe(
        products => {
          this.products = products;
          var name = this.name;
          this.product = products[name];
        },
        err => console.error(err),
        () => console.log(this.products)
      );
      // In a real app: dispatch action to load the details here.
    });
  }

}
