import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { ActivatedRoute } from '@angular/router';
import { DetalheReceita } from 'src/app/services/interface/detalhe-receita';

@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.component.html',
  styleUrls: ['./detalhe-receita.component.scss']
})
export class DetalheReceitaComponent implements OnInit {

  private _receitaId = this.route.snapshot.paramMap.get("id");
  public receita: DetalheReceita = {};

  constructor(private service: ReceitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getDetalheReceita(this._receitaId).subscribe(
      data => {
        this.receita = data;
        console.log(data);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
