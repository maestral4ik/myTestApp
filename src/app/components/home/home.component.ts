import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ErrorMessage } from '../../shared/error/error.interface';
import { LastfmService } from '../../services/lastfm.service';
import { TopArtist} from '../../lastfm.interface';
import { ErrorComponent } from '../../shared/error/error.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private lastfm: LastfmService) { }

  topArtists: TopArtist[];
  topArtistsLength: number;
  loading: boolean = false; 
  error: Observable<ErrorMessage>;
  ngOnInit() {
    this.getTopArtists()
  }

  getTopArtists(){
    this.loading = true;
    this.lastfm.getTopArtists('chart.gettopartists')
      .subscribe(data => {
        this.topArtists = data;
        this.topArtists.sort((a:TopArtist, b:TopArtist) => {
          if (parseInt(a.playcount) < parseInt( b.playcount)) 
            {return 1;}
          if (parseInt(a.playcount) > parseInt( b.playcount)) 
            {return -1;}
          return 0;
      });
      // console.log(this.topArtists)
      this.topArtistsLength = this.topArtists.length;
      this.loading = false;
      },
    error => {
      this.error = error;
      this.loading = false;
      }
    )
  }

}
