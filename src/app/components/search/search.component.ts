import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  loading: boolean;

  buscando: boolean;

  constructor( private _spotify: SpotifyService) {


   }


  buscar( termino: string ){

    this.buscando = true;

    this.loading = true;

    this._spotify.getArtistas( termino )
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      });
  }

}
