import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemReceita } from './interface/item-receita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private _url = "/assets/data/receitas.json";

  constructor(private http: HttpClient) { }

  getReceitas(): Observable<ItemReceita[]> {
    console.log("Retrieving recipes...");    
    return this.http.get<ItemReceita[]>(this._url);
  }
}
