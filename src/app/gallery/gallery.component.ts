import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    var dir = "/img/";
    var fileextension = ".png";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
          console.log(this);
            //List all .png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                console.log(this);
                //var filename = this.href.replace(window.location.host, "").replace("http://", "");
                //$("body").append("<img src='" + dir + filename + "'>");
            });
        }
    });    

  }
  ngAfterViewInit() {
    (<any>$('.scrollspy')).scrollSpy();
  }
  

}
