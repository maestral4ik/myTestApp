import { Component, OnInit, Input } from '@angular/core';
import { TopAlbum } from '../../../lastfm.interface';

@Component({
  selector: 'app-topalbums-view',
  templateUrl: './topalbums-view.component.html',
  styleUrls: ['./topalbums-view.component.css']
})
export class TopalbumsViewComponent implements OnInit {
  @Input()
  topAlbumsList: TopAlbum;

  getImage(index: string){
    if (this.topAlbumsList[index].image[3]['#text']!=='') {
      return this.topAlbumsList[index].image[3]['#text']
    }
    else{
      return '../../../assets/no_image.jpg'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
