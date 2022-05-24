import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  http: any;

  constructor() { }

  ngOnInit(): void {
  }

 url="../assets/image/upload/empty.jpg";
  files: any;

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
  console.log(this.files);

  var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.files);
      /* Image Post Request */
  }

}
