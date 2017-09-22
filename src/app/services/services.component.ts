import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'TS-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit, OnInit {
  private services;
  public service;
  private sub: any;
  private name;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.apiService.fetchServices().subscribe(
        services => {
          this.services = services;
          var name = this.name;
          this.service = services[name];
          setTimeout(function () {
            (<any>$('.scrollspy')).scrollSpy();
            (<any>$('.carousel-prod')).carousel();
          }, 100);
        },
        err => console.error(err),
        () => console.log(this.services)
      );
      // In a real app: dispatch action to load the details here.
    });
  }
  ngAfterViewInit() {
    setTimeout(function () {
      (<any>$('.scrollspy')).scrollSpy();
      (<any>$('.carousel-prod')).carousel({ fullWidth: true }, setTimeout(autoplay, 8000));
      function autoplay() {
        (<any>$('.carousel-prod')).carousel('next');
        setTimeout(autoplay, 8000);
      }
    }, 100);
  }
}
