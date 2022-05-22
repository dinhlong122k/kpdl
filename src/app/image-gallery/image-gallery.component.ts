import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }
  allpost : any;
  notEmptyPost = true;
  notscrolly = true;
   ngOnInit() {
     this.loadInitPost();
  }

  loadInitPost() {
    const url = 'https://picsum.photos/v2/list?page=0&limit=100';
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.allpost = data;
    });
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.spinner.show();
      this.notscrolly = false;
      //this.loadNextPost();
     }
  }

}
