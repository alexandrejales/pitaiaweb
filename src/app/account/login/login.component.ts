import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/model/form/login-form';
import { ToastService } from 'src/app/service/toast.service';
import { Constante } from 'src/app/resource/contante';
import { Library } from 'src/app/resource/library';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	durationInSeconds = 5;

	loginForm: LoginForm = new LoginForm();
	hide: boolean = true;

	constructor(private http: HttpClient, private accountService: AccountService, private router: Router, private toastService: ToastService) {
	}

	openSnackBar() {
		this.toastService.openSeccessSnackBar("Ola Alexandre");
	}

	ngOnInit(): void {
		this.toastService.openSeccessSnackBar("Realize seu login");
	}

	onSubmit() {
		this.logar();
	}

	logar() {
		window.localStorage.setItem(Constante.EMAIL, this.loginForm.email);

		//Chamada ao servidor para autenticar
		this.accountService.login2(this.loginForm).subscribe(
			{
				next: data => {
					window.localStorage.setItem(Constante.TOKEN, data.token);
					window.localStorage.setItem(Constante.EMAIL, this.loginForm.email);
					this.loginForm.senha = '';
					this.toastService.openSeccessSnackBar("Bem vindo ");
					this.router.navigateByUrl('/');
				}
			}
		)
	}
}