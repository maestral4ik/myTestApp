import { Component, OnInit, Input } from '@angular/core';
import { TopArtist } from '../../../lastfm.interface';

@Component({
  selector: 'app-search-preview',
  templateUrl: './search-preview.component.html',
  styleUrls: ['./search-preview.component.css']
})
export class SearchPreviewComponent implements OnInit {
  @Input()
  results: TopArtist[];
  constructor() { }

  ngOnInit() {
  }
  getImage(index: number){
    if (this.results[index].image[0]['#text']!=='') {
      return this.results[index].image[0]['#text']
    }
    else{
      return '../../../assets/no_image.jpg'
    }
  }
}
