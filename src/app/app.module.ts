import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguimientoComponent } from './vistas/seguimiento/seguimiento.component';
import { DerivacionComponent } from './derivacion/derivacion.component';
import { FCierreComponent } from './f-cierre/f-cierre.component';


@NgModule({
  declarations: [
    AppComponent,
    SeguimientoComponent,
    DerivacionComponent,
    FCierreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
