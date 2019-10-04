import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const token = 'BQBrjxG5E4PD__GTbiA7jp-RSOgRUorgIwAqpDoC9s0Lv3pUYu7DacaUxV6NXbLvuMDBM9g9yfnnS3zMoEo';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`
    });

    return this.http.get( url, {headers} );
  }

  // Nuevos lanzamientos
  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data.albums.items;
    }));

  }

  // Obtener artistas de busqueda
  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( (data: any) => {
        return data.artists.items;
    }));

  }

  // Obtener artista por id
  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
     /* .pipe( map( (data: any) => {
        return data.artists.items;
    }));*/

  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (data: any) => {
      return data.tracks;
  }));

  }

}
