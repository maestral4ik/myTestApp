import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { LastfmService } from '../../services/lastfm.service';
import { TopArtist } from '../../lastfm.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private activatedroute: ActivatedRoute,
    private lastfm: LastfmService,
    private route: Router

  ) { }
  

  ngOnInit() {}

  searchStr: string = '';
  minLength: number = 2;
  isLoading: boolean = false;
  artistsSearchPreview: TopArtist[];

  handleChange(){
    if(this.minLength <= this.searchStr.length){
      this.lastfm.searchArtistsPreview('artist.search', this.searchStr).subscribe(data => {
        this.artistsSearchPreview = data;
        this.isLoading = true
        console.log(data)
      }),
      error => console.log(error)
    }
    else{this.isLoading = false}
  }
  onSubmit(){
    if(this.minLength-1 <= this.searchStr.length){
    this.isLoading = false
    this.route.navigate(['/search', {query: this.searchStr}]);
    }
  }

}
