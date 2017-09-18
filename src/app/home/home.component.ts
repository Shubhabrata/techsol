import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../shared';



@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {


  public home;

  constructor(private apiService: ApiService) {
  }

  getHomeContent() {
    this.apiService.fetchHome().subscribe(
      home => { this.home = home },
      err => console.error(err),
      () => console.log(this.home)
    );
  }

  ngOnInit() {
    this.getHomeContent();
  }
  ngAfterViewInit() {
    (<any>$('.carousel-home')).carousel({ fullWidth: true }, setTimeout(autoplay, 15000));
    function autoplay() {
      (<any>$('.carousel-home')).carousel('next');
      setTimeout(autoplay, 15000);
    }
  }
}