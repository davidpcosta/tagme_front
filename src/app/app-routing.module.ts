import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { DetalheReceitaComponent } from './pages/detalhe-receita/detalhe-receita.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receita/:id', component: DetalheReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
