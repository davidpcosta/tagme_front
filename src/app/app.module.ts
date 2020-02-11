import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { ItemReceitaComponent } from './components/item-receita/item-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceitasComponent,
    ItemReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
