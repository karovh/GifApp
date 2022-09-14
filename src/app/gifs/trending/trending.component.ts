import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',

})
export class TrendingComponent {


  constructor(private gifsService: GifsService) { }

  get trending() {
    return this.gifsService.trending;
  }

}
