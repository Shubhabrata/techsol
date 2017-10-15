import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QualityComponent } from './quality/quality.component';
import { ClientsComponent } from './clients/clients.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ServicesComponent } from './services/services.component';
import { ServicesHomeComponent } from './serviceshome/serviceshome.component';
import { FAQComponent } from './faq/faq.component';
import { ManufacturingProcessComponent } from './manufacturing-process/manufacturing-process.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { SupportComponent } from './support/support.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SolutionsHomeComponent } from './solutions-home/solutions-home.component';
import { SupportHomeComponent } from './support-home/support-home.component';
import { SolutionsComponent } from './solutions/solutions.component';

import { ApiService } from './shared';
import { routing } from './app.routing';
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductsHomeComponent,
    ServicesComponent,
    ServicesHomeComponent,
    GalleryComponent,
    ContactUsComponent,
    QualityComponent,
    ClientsComponent,
    WhatWeDoComponent,
    SitemapComponent,
    PrivacyPolicyComponent,
    SupportComponent,
    FAQComponent,
    ManufacturingProcessComponent,
    ProductRegistrationComponent,
    TermsOfUseComponent,
    SolutionsHomeComponent,
    SupportHomeComponent,
    SolutionsComponent,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
