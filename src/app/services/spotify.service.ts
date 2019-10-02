import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  // Nuevos lanzamientos
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBtL03TRykTnrWY_lBXOpbjqJXq85Ei6npJWNW1v8pzehUi_cmYEzGPZPcLMvIl4MlFy0OI8aIYNE0cfBw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));

  }

  // Obtener artistas de busqueda
  getArtista( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBtL03TRykTnrWY_lBXOpbjqJXq85Ei6npJWNW1v8pzehUi_cmYEzGPZPcLMvIl4MlFy0OI8aIYNE0cfBw'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
    .pipe( map( (data: any) => {
      return data.artists.items;
    }));

  }

}
