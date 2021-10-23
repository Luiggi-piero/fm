import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes 
import { BarraControlComponent } from './barra-control/barra-control.component';
import { ListaVideosComponent } from './lista-videos/lista-videos.component';
import { VideoDetalleComponent } from './video-detalle/video-detalle.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BarraControlComponent,
    ListaVideosComponent,
    VideoDetalleComponent,
    BarraNavegacionComponent,
    HeaderComponent
  ],
  exports:[
    BarraNavegacionComponent,
    HeaderComponent,
    ListaVideosComponent,
    VideoDetalleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
