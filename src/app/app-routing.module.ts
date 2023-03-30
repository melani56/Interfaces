import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeguimientoComponent} from "./vistas/seguimiento/seguimiento.component";
import{DerivacionComponent} from "./derivacion/derivacion.component";
import{FCierreComponent} from "./f-cierre/f-cierre.component";

const routes: Routes = [
  {path:'seguimiento', component:SeguimientoComponent},
  {path:'derivacion', component:DerivacionComponent},
  {path:'cierre', component:FCierreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
