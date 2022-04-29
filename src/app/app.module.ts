import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThiagoComponent } from './thiago/thiago.component';
import { ThiagoListaComponent } from './thiago-lista/thiago-lista.component';
import { ThiagoDetalhesComponent } from './thiago-detalhes/thiago-detalhes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ThiagoComponent, ThiagoListaComponent, ThiagoDetalhesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
