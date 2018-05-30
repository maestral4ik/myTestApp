import { Component, OnInit, Input } from '@angular/core';
import { ArtistFM } from '../../../lastfm.interface';

@Component({
  selector: 'app-similar-artists-view',
  templateUrl: './similar-artists-view.component.html',
  styleUrls: ['./similar-artists-view.component.css']
})
export class SimilarArtistsViewComponent implements OnInit {
  
  @Input()
  similarArtists: ArtistFM
  getImage(index: string){
    if (this.similarArtists[index].image[3]['#text']!=='') {
      return this.similarArtists[index].image[3]['#text']
    }
    else{
      return '../../../assets/no_image.jpg'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
