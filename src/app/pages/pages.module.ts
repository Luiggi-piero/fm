import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { ComponentsModule } from '../components/components.module';

// Componentes
import { CatalogoPrincipalComponent } from './catalogo-principal/catalogo-principal.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    CatalogoPrincipalComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
