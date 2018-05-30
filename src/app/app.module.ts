import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { lastFmSearchInjectables } from './injectables/lastfm.injectables';
import { ErrorComponent } from './shared/error/error.component';
import { ArtistViewComponent } from './components/artist/artist-view/artist-view.component';
import { SimilarArtistsViewComponent } from './components/artist/similar-artists-view/similar-artists-view.component';
import { TopalbumsViewComponent } from './components/artist/topalbums-view/topalbums-view.component';
import { AlbumViewComponent } from './components/album/album-view/album-view.component';
import { TrackTimePipe } from './shared/trackTime.pipe';
import { SearchPreviewComponent } from './shared/header/search-preview/search-preview.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    AlbumComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    ErrorComponent,
    ArtistViewComponent,
    SimilarArtistsViewComponent,
    TopalbumsViewComponent,
    AlbumViewComponent,
    TrackTimePipe,
    SearchPreviewComponent,
    PagenotfoundComponent,
    SearchResultComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [lastFmSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
