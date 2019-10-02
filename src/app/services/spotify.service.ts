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

    const token = 'BQB56nW0qjfZjH-tpm6noVpEN1r8kiekJWYOk4lO8gLQDTh-LNLPkSqsAGaF6ZBjauVTRZkde08_LQ5KwYY';

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
  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( (data: any) => {
        return data.artists.items;
    }));

  }

}
