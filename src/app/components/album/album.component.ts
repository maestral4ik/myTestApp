import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlbumInfo, Track } from '../../lastfm.interface';
import { ErrorComponent } from '../../shared/error/error.component';
import { LastfmService } from '../../services/lastfm.service';
import { ErrorMessage } from '../../shared/error/error.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private lastfm: LastfmService
  ) { }

  artistName: string;
  albumName:string;
  AlbumInfo: AlbumInfo;
  Tracks: Track[];
  error: Observable<ErrorMessage>;
  AlbumInfoLength: number;
  TracksLength: number;

  ngOnInit() {
    this.activatedroute.params.subscribe(data=>{
      this.getAlbumInfo();
    })
  }

  getAlbumInfo(){
    this.artistName = this.activatedroute.snapshot.paramMap
      .get('artistName')
      .replace(new RegExp('&', 'gi'), 'and')
      .replace(new RegExp('\\+', 'gi'), '%2B');
    this.albumName = this.activatedroute.snapshot.paramMap
      .get('album')
      .replace(new RegExp('&', 'gi'), 'and')
      .replace(new RegExp('\\+', 'gi'), '%2B');
    this.lastfm.getAlbumInfo('album.getInfo', this.artistName, this.albumName)
      .subscribe(data => {
        if(data.error){
          this.router.navigate(['/404']);
        }
        console.log(data)
        this.AlbumInfo = data;
        // console.log(this.AlbumInfo)
        this.Tracks = data.tracks.track;
        this.TracksLength = this.Tracks.length
      },
      error => {
        this.error = error;
      }
    )
  }
}
