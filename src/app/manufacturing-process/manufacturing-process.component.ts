import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-manufacturing-process',
  templateUrl: './manufacturing-process.component.html',
  styleUrls: ['./manufacturing-process.component.scss']
})
export class ManufacturingProcessComponent implements OnInit, AfterViewInit {

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
