import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ArtistFM, TopArtist, TopAlbum, AlbumInfo } from '../lastfm.interface'

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  constructor(
    private http: HttpClient,
    @Inject('LASTFM_API_KEY') private apiKey: string,
    @Inject('LASTFM_API_URL') private apiUrl: string
  ) { }

  validateData(data: any = {}, path: string = '', empty: any = []) {
    if (data && data.error) {
      return data;
    }
    const value = path.split('.').reduce((a, b) => a[b] || {}, data);
    return Object.keys(value).length === 0 ? empty : value;
  }

  getTopArtists(method: string):Observable<TopArtist[]>{
    const params: string = [
      `method=${method}`,
      `api_key=${this.apiKey}`,
      `format=json`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<TopArtist[]>(queryUrl)
      .pipe(
        map(data => this.validateData(data,'artists.artist'))
      )
  }

  getArtistInfo(method: string, artistName: string):Observable<ArtistFM>{
    const params: string = [
      `method=${method}`,
      `artist=${artistName}`,  
      `api_key=${this.apiKey}`,
      `autocorrect=1`,
      `format=json`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Observable<ArtistFM>>(queryUrl)
      .pipe(
        map(data => this.validateData(data,'artist')),
      )
  }

  getArtistTopAlbums(method: string, artistName: string):Observable<TopAlbum[]>{
    const params: string = [
      `method=${method}`,
      `artist=${artistName}`,  
      `api_key=${this.apiKey}`,
      `autocorrect=1`,
      `limit=4`,
      `format=json`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Observable<TopAlbum[]>>(queryUrl)
    .pipe(
      map(data => this.validateData(data,'topalbums.album')),
    )
  }

  getAlbumInfo(method: string, artistName: string, albumName: string):Observable<AlbumInfo>{
    const params: string = [
      `method=${method}`,
      `artist=${artistName}`,  
      `album=${albumName}`,  
      `api_key=${this.apiKey}`,
      `autocorrect=1`,
      `format=json`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Observable<AlbumInfo>>(queryUrl)
      .pipe(
        map(data => this.validateData(data, 'album'))
      )
  }

  searchArtists(method: string, query: string):Observable<TopArtist[]>{
    const params: string = [
      `method=${method}`,
      `api_key=${this.apiKey}`,
      `format=json`,
      `artist=${query}`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Observable<TopArtist[]>>(queryUrl)
      .pipe(
        catchError(this.handleError),
        map(data => this.validateData(data, 'results.artistmatches.artist'))
      )
  }
  searchArtistsPreview(method: string, query: string):Observable<TopArtist[]>{
    const params: string = [
      `method=${method}`,
      `api_key=${this.apiKey}`,
      `format=json`,
      `limit=5`,
      `artist=${query}`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Observable<TopArtist[]>>(queryUrl)
      .pipe(
        catchError(this.handleError),
        map(data => this.validateData(data, 'results.artistmatches.artist'))
      )
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };


}
