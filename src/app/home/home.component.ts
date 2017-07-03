import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';



@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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

}