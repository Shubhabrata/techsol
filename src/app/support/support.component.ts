import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit, AfterViewInit {

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
