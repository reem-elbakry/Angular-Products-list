import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPhotos } from './iphotos';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhotos>{
  //  this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos')   //:(((((())))))
    return of({
      albumId: 1,
      id: 1,
      title: 'string',
      url: 'myyyyyyyyyy',
      thumbnailUrl: 'stringurl',

    });
  }
}
