import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { LastfmService } from '../../services/lastfm.service';
import { TopArtist } from '../../lastfm.interface';
import { ErrorMessage } from '../../shared/error/error.interface';
import { ErrorComponent } from '../../shared/error/error.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private lastfm: LastfmService,
    private activatedroute: ActivatedRoute
  ) { }

  searchResult: TopArtist[];
  searchResultLength: number;
  isLoading: boolean = false;
  error: Observable<ErrorMessage>; 
  searchString: string;

  ngOnInit() {
    this.activatedroute.params.subscribe((params)=>{
      this.searchArtists(params.query);
      this.searchString = params.query;
    }); 
  }

  searchArtists(params: string){
    this.isLoading = true;
    this.lastfm.searchArtists('artist.search', params)
    .subscribe(
      data => {
        this.searchResult = data;
        console.log(this.searchResult);
        this.searchResultLength = this.searchResult.length;
        this.isLoading = false;
      }
    ),
    error => {
      this.error = error
      console.log(this.error)
    } 
    this.isLoading = false;
  }

}
