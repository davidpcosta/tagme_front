import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/service/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  private _receitas = [];
  public searchText = "";

  constructor(private service: ReceitasService) { }

  ngOnInit(): void {
    this.service.getReceitas().subscribe(
      data => {
        this._receitas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  receitas() {
    if (this.searchText) {
      return this._receitas.filter(
        item => item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
      );
    }    
    return this._receitas;
  }

}
