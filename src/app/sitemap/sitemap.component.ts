import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit, AfterViewInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }
  ngAfterViewInit() {
    (<any>$('.scrollspy')).scrollSpy();
  }
  

}
