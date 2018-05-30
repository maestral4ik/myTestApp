import { Component, OnInit, Input } from '@angular/core';

import { ArtistFM } from '../../../lastfm.interface';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {
  @Input()
  artists: ArtistFM;
  constructor() { }
  getImage(){
    if (this.artists.image[3]['#text']=='') {
      return '../../../assets/no_image.jpg'
    }
    else{
      return this.artists.image[3]['#text']
    }
  }
  ngOnInit() {
  }

}
