import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'TS-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements AfterViewInit, OnInit {
  private solutions;
  public solution;
  private sub: any;
  private name;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.apiService.fetchSolutions().subscribe(
        solutions => {
          this.solutions = solutions;
          var name = this.name;
          this.solution = solutions[name];
          setTimeout(function () {
            (<any>$('.scrollspy')).scrollSpy();
            (<any>$('.carousel-solutions')).carousel({ fullWidth: true });
          }, 100);
        },
        err => console.error(err),
        () => console.log(this.solutions)
      );
      // In a real app: dispatch action to load the details here.
    });
  }
  ngAfterViewInit() {
    setTimeout(function () {
      (<any>$('.scrollspy')).scrollSpy();
      (<any>$('.carousel-solutions')).carousel({ fullWidth: true }, setTimeout(autoplay, 8000));
      function autoplay() {
        (<any>$('.carousel-solutions')).carousel('next');
        setTimeout(autoplay, 8000);
      }
    }, 100);
  }
}
