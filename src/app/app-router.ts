import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { AlbumComponent } from "./components/album/album.component";
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', redirectTo:''},
    {path: 'artist', redirectTo:''},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:artistName', component: ArtistComponent},
    {path: 'artist/:artistName/:album', component: AlbumComponent},
    {path: '404', component: PagenotfoundComponent},
    {path: '**', redirectTo: '404'},

]; 

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}