import { Component, OnInit, Input } from '@angular/core';
import { AlbumInfo } from '../../../lastfm.interface';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
  @Input()
  albums: AlbumInfo;
  constructor() { }

  ngOnInit() {}
  getImage(){
    if (this.albums.image[3]['#text']=='') {
      return '../../../assets/no_image.jpg'
    }
    else{
      return this.albums.image[3]['#text']
    }
  }

}
