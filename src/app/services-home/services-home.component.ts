import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'TS-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
  }

}
