import { Component, OnInit, Input } from '@angular/core';
import { TopArtist } from '../../../lastfm.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input()
  searchResult: TopArtist;
  constructor() { }

  ngOnInit() {
  }

}
