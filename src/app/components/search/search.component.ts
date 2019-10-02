import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor( private _spotify: SpotifyService) { }

  buscar( termino: string ){
    this._spotify.getArtista( termino )
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas = data;
      });
  }

}
