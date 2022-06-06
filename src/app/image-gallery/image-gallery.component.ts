import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { ImgaeGalery } from './imgae-galery';
import { ImageGaleryService } from './image-galery.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  imgGet!: ImgaeGalery[];
  url="../assets/image/upload/empty.jpg";
  files: any;
  allpost : any;
  notEmptyPost = true;
  notscrolly = true;
  imgList!: Object | null;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private imgService: ImageGaleryService) {
  }

   ngOnInit() {
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

 onselectFile(e: any){
   if(e.target.files){
     var reader= new FileReader();
    this.files=e.target.files[0];
     reader.readAsDataURL(e.target.files[0]);
     reader.onload=(e: any) =>{
       this.url=e.target.result;
     }
   }
 }

 onSubmitform(f: NgForm){
  const fileUpload= this.files;

  var file = new FormData();
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  file.append('file', this.files);

  // this.http.post<Response>('http://localhost:8000/upload',file, { observe: 'response' })
  // .subscribe((response) => {
  //     if(response.status== 200){
  //       console.log(response.body);
  //     }
  // });

  this.imgService.getImage(file).subscribe(response =>{
    
  });

  }

}
