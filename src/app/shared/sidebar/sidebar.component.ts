import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { ResultadosComponent } from '../../gifs/resultados/resultados.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  get historial() {

    return this.gifService.historial
  }
  constructor(private gifService: GifsService) {
    this.gifService.buscarGifTrending();
  }

  buscar(item: string) {

    this.gifService.buscarGifs(item)

  }


}
