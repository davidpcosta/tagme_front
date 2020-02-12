import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = {
    login: "",
    password: ""
  };

  public errorMessage = "";

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public validateLogin() {
    this.errorMessage = "";
    this.service.validateLogin(this.login).subscribe(
      data => {
        if(data.success) {
          this.router.navigate(['/receitas']);
        }
      },
      error => {
        console.log(error.error.error);
        this.errorMessage = error.error.error;
      }
    );
  }

}
