export interface TopArtist{
    image?: ImageFM[];
    listeners?: string;
    mbid: string;
    name: string;
    playcount?: string;
    streamable?: string;
    url: string;
}
export interface TopAlbum{
    artist: TopArtist;
    image: ImageFM[];
    mbid: string;
    name: string;
    playcount: string;
}
export interface AlbumInfo{
    artist: string;
    image: ImageFM[];
    mbid: string;
    name: string;
    playcount: string;
    tags: TagsFM;
    tracks: Tracks;
    url: string;
    wiki: Wiki;
    error? : string;
}
export interface ArtistFM {
    bio?: ArtistBio;
    image?: ImageFM[];
    mbid: string;
    name: string;
    ontour?: string;
    similar?: Artists;
    stats?: Stats;
    streamable?: string;
    tags?: TagsFM;
    url: string;
    error? : string;
  }
  interface ArtistBio {
    content: string;
    links: ArtistLinks;
    published: string;
    summary: string;
  }
  interface ArtistLinks {
      link: ArtistLink;
  }
  interface ArtistLink {
    '#text': string;
    href: string;
    rel: string;
  }
  interface ImageFM {
    '#text': string;
    size: string;
  }
  interface Artists {
    artist: ArtistFM[]
  }
  interface Stats {
      listeners: string;
      playcount: string;
  }
  interface TagsFM {
      tag: Tag[];
  }
  interface Tag {
      name: string;
      url: string;
  }
  interface Tracks{
    track: Track[];
  }
export interface Track{
    ["@attr"]: TrackAttr;
    artist?: ArtistFM;
    duration?: string;
    name?: string;
    streamable?: Streamable;
    url?: string
  }
  interface TrackAttr {
    rank: string;
  }
  interface Wiki {
    content: string;
    published: string;
    summary: string;
  }
  interface Streamable {
    '#text': string;
    fulltrack: string;
  }