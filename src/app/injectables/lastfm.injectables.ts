import { LastfmService } from '../services/lastfm.service';
export const lastFmSearchInjectables: Array<any> = [ 
    {provide: LastfmService, useClass: LastfmService},
    {provide: 'LASTFM_API_KEY', useValue: '4101158aa507942f3a32c3b6ea467090'},
    {provide: 'LASTFM_API_URL', useValue: 'https://ws.audioscrobbler.com/2.0/'}
];
