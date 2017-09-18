import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ServicesComponent } from './services/services.component';
import { ServicesHomeComponent } from './serviceshome/serviceshome.component';

import { ApiService } from './shared';
import { routing } from './app.routing';
import 'bootstrap/dist/css/bootstrap.css';
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
