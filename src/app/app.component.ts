import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private api: ApiService, private router: Router) {
    this.title = this.api.title;
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      (<any>$('.nav-link')).removeClass("show-nav");      
    });
  }
}
