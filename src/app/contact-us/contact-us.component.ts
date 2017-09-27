import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-gallery',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

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
