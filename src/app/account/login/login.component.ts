import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  readonly apiURL: string;
  hide: boolean = true;

  constructor(private http: HttpClient, private accountService: AccountService, private router: Router) {
    this.apiURL = 'http://localhost:8080';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.login.email + this.login.senha);
    this.logar();
    //   try {
    //     const result = await this.accountService.login(this.login);
    //     console.log('Login efetuado: ${result}');

    //     //Navega para rota vazia novamente

    //     console.log("Loin realizado");

    //   } catch (error) {
    //     console.log("Deu erro no login");
    //     console.error(error);
    //   }
    //   this.router.navigate(['/']);
  }

  async listarTodos() {
    this.http.get(this.apiURL + '/teste')
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        erro => {
          if (erro.status == 404) {
            console.log('Produto não localizado.');
          }
        }
      );
  }

  async logar() {
    this.http.post(this.apiURL + "/teste", this.login)
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        erro => {
          if (erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }
}
