import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/service/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  public receitas = [];

  constructor(private service: ReceitasService) { }

  ngOnInit(): void {
    this.service.getReceitas().subscribe(
      data => {
        this.receitas = data;
      },
      error => {
        console.log(error);
        
      }
      
    );
  }

}
