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
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';
import { FAQComponent } from './faq/faq.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ManufacturingProcessComponent } from './manufacturing-process/manufacturing-process.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SolutionsHomeComponent } from './solutions-home/solutions-home.component';
import { SupportHomeComponent } from './support-home/support-home.component';
import { SolutionsComponent } from './solutions/solutions.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products/:name', component: ProductsComponent},
  { path: 'services/:name', component: ServicesComponent},
  { path: 'solutions/:name', component: SolutionsComponent},
  { path: 'products-home', component: ProductsHomeComponent},
  { path: 'services-home', component: ServicesHomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'quality', component: QualityComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'what-we-do', component: WhatWeDoComponent},
  { path: 'sitemap', component: SitemapComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'support', component: SupportComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'product-registration', component: ProductRegistrationComponent},
  { path: 'manufacturing-process', component: ManufacturingProcessComponent},
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'solutions-home', component: SolutionsHomeComponent},
  { path: 'support-home', component: SupportHomeComponent},
];

export const Routing = RouterModule.forRoot(routes);
