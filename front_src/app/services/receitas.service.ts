import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemReceita } from './interface/item-receita';
import { Observable } from 'rxjs';
import { DetalheReceita } from './interface/detalhe-receita';
import { DetalheReceitaComponent } from '../pages/detalhe-receita/detalhe-receita.component';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient, private api: Api) { }

  getReceitas(): Observable<ItemReceita[]> {
    console.log("Retrieving recipes...");    
    return this.http.get<ItemReceita[]>(this.api.getUrlReceitas());
  }

  getDetalheReceita(id: string): Observable<DetalheReceita> {
    console.log("Retrieving recipe details...");
    const url = this.api.getUrlDetalheReceita(id);
    return this.http.get<DetalheReceita>(url);
  }
}
