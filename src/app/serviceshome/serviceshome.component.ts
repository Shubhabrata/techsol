import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'TS-serviceshome',
  templateUrl: './serviceshome.component.html',
  styleUrls: ['./serviceshome.component.scss']
})
export class ServicesHomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
  }

}
