import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './pages/login/login.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { ItemReceitaComponent } from './components/item-receita/item-receita.component';
import { DetalheReceitaComponent } from './pages/detalhe-receita/detalhe-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceitasComponent,
    ItemReceitaComponent,
    DetalheReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
