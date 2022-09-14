import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',

})
export class GifsPageComponent {



  constructor(private gifService: GifsService) {
    this.gifService.buscarGifTrending()

  }

  get mostrar() {
    return this.gifService.flagTrending
  }



}
