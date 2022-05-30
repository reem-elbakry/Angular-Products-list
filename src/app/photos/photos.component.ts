import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { pluck } from "rxjs/operators";
import { PhotoServiceService } from '../photo-service.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  name = "Angular " + VERSION.major;
  constructor(private photoServe: PhotoServiceService) { }

  ngOnInit(): void {
    this.photoServe
    .getPhotos()
    .pipe(pluck('url'))
    .subscribe(r => {
      console.log(r);
    });
  }

}
