import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public validateLogin() {

    this.service.validateLogin().subscribe(
      data => {
        if(data.success) {
          this.router.navigate(['/receitas']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
