import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ServicesHomeComponent } from './serviceshome/serviceshome.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QualityComponent } from './quality/quality.component';
import { ClientsComponent } from './clients/clients.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products/:name', component: ProductsComponent},
  { path: 'services/:name', component: ServicesComponent},
  { path: 'products-home', component: ProductsHomeComponent},
  { path: 'services-home', component: ServicesHomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'quality', component: QualityComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'infrastructure', component: InfrastructureComponent},
  { path: 'sitemap', component: SitemapComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'support', component: SupportComponent},
];

export const routing = RouterModule.forRoot(routes);
