import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit, AfterViewInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
    setTimeout(function () {
      (<any>$('.scrollspy')).scrollSpy();
      (<any>$('.carousel-infra')).carousel({ fullWidth: true });
    }, 1000);

  }
  ngAfterViewInit() {
    setTimeout(function () {
      (<any>$('.scrollspy')).scrollSpy();
      (<any>$('.carousel-infra')).carousel({ fullWidth: true }, setTimeout(autoplay, 8000));
      function autoplay() {
        (<any>$('.carousel-infra')).carousel('next');
        setTimeout(autoplay, 8000);
      }
    }, 100);
  }
}
