import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { CatalogoPrincipalComponent } from './pages/catalogo-principal/catalogo-principal.component';
import { VideoDetalleComponent } from './components/video-detalle/video-detalle.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  { path:'catalogo-principal', component: CatalogoPrincipalComponent},
  { path:'buscar', component: BuscarComponent}, 
  { path: '**', pathMatch: 'full', redirectTo:'buscar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
