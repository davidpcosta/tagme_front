import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../services/receitas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalheReceita } from '../..//services/interface/detalhe-receita';

@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.component.html',
  styleUrls: ['./detalhe-receita.component.scss']
})
export class DetalheReceitaComponent implements OnInit {

  private _receitaId = this.route.snapshot.paramMap.get("id");
  public receita: DetalheReceita;
  public showModal = false;

  constructor(private service: ReceitasService, private route: ActivatedRoute, private router: Router) { }

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

  public checkItem(obj: any) {
    if (!obj.checked) {
      obj.checked = true;
    } else {
      obj.checked = false;
    }
  }

  public finishPrep() {
    this.showModal = true;
  }

  public goToMain() {
    this.router.navigate(['/receitas']);
  }

  public isAllChecked() {
    return this.isAllIngredientsChecked() && this.isAllStepsChecked();
  }

  private isAllIngredientsChecked() {
    return this.receita.ingredients.filter(
      item => item.checked != true
    ).length == 0;
  }

  private isAllStepsChecked() {
    return this.receita.steps.filter(
      item => item.checked != true
    ).length == 0;
  }

}
