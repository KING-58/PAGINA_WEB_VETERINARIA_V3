import { Routes } from '@angular/router';
import { ProductosComponent } from './features/productos/productos';
import { ServiciosComponent } from './features/servicios/servicios';
import { GaleriaComponent } from './features/galeria/galeria';
import { NosotrosComponent } from './features/nosotros/nosotros';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'nosotros', component: NosotrosComponent },
];
