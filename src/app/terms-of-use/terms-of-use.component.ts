import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-faq',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit, AfterViewInit {

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
