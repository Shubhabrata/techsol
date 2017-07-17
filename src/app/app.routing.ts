import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ServicesHomeComponent } from './services-home/services-home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products/:name', component: ProductsComponent},
  { path: 'services/:name', component: ProductsComponent},
  { path: 'products-home', component: ProductsHomeComponent},
  //{ path: 'services-home', component: ServicesHomeComponent},
];

export const routing = RouterModule.forRoot(routes);