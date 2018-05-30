import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorMessage } from '../../shared/error/error.interface';
import { LastfmService } from '../../services/lastfm.service';
import { ArtistFM, TopArtist, TopAlbum} from '../../lastfm.interface';
import { ErrorComponent } from '../../shared/error/error.component';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(
    private router: Router,
    private activaredRoute: ActivatedRoute,
    private lastfm: LastfmService
  ) { }

  artistName: string;
  artistInfo:  ArtistFM;
  similarArtists: ArtistFM[];
  error: Observable<ErrorMessage>;
  topAlbumsList: TopAlbum[];
  similarArtistsLength: number;
  topAlbumsListLength: number;

  ngOnInit() {
    this.activaredRoute.params.subscribe(data=>{
      this.getArtistInfo();
      this.getAlbumsList();
    })
  }

  getArtistInfo(){
    this.artistName = this.activaredRoute.snapshot.paramMap
      .get('artistName')
      .replace(new RegExp('&', 'gi'), 'and')
      .replace(new RegExp('\\+', 'gi'), '%2B');
    this.lastfm.getArtistInfo('artist.getInfo', this.artistName)
      .subscribe(data => {
        if(data.error){
          this.router.navigate(['/404']);
        }
        this.artistInfo = data;
        this.similarArtists = data.similar.artist.splice(0,4)
        this.similarArtistsLength = this.similarArtists.length
        // console.log(this.similarArtists)
      },
      error => {
        this.error=error;
        // console.log(this.error)
      }
    )
  }
  
  getAlbumsList(){
    this.artistName = this.activaredRoute.snapshot.paramMap
      .get('artistName')
    this.lastfm.getArtistTopAlbums('artist.getTopAlbums', this.artistName)
      .subscribe(data => {
        this.topAlbumsList = data;
        this.topAlbumsListLength = this.topAlbumsList.length;
      },
      error => {
        this.error=error;
        // console.log(this.error)
      }
    )
  }

}
