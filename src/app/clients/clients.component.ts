import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-gallery',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AfterViewInit {

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
