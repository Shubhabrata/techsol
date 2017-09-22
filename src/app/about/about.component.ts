import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }
  ngAfterViewInit() {
    (<any>$('.scrollspy')).scrollSpy();
    
    /*(<any>$('.carousel-prod')).carousel({ fullWidth: true }, setTimeout(autoplay, 8000));    
    function autoplay() {
      (<any>$('.carousel-prod')).carousel('next');
      setTimeout(autoplay, 8000);
    }*/
  }
  

}
