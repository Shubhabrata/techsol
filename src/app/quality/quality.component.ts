import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit, AfterViewInit {

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
