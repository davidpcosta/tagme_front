import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemReceita } from './interface/item-receita';
import { Observable } from 'rxjs';
import { DetalheReceita } from './interface/detalhe-receita';
import { DetalheReceitaComponent } from '../pages/detalhe-receita/detalhe-receita.component';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private _url = "/assets/data/receitas.json";
  private _urlDetail = "/assets/data/rec-0{id}.json";

  constructor(private http: HttpClient) { }

  getReceitas(): Observable<ItemReceita[]> {
    console.log("Retrieving recipes...");    
    return this.http.get<ItemReceita[]>(this._url);
  }

  getDetalheReceita(id: string): Observable<DetalheReceita> {
    console.log("Retrieving recipe details...");
    const url = this._urlDetail.replace('{id}', id);
    return this.http.get<DetalheReceita>(url);
  }
}
