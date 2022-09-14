import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TrendingComponent } from './trending/trending.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    GifsPageComponent,
    TrendingComponent
  ]

})
export class GifsModule { }
