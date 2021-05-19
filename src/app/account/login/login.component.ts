import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/model/form/login-form';
import { ToastService } from 'src/app/service/toast.service';
import { Constante } from 'src/app/resource/contante';


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
		window.localStorage.setItem('token', 'ajt409twupwourein8tw7958wm4c8w3489m2-8342');
		window.localStorage.setItem(Constante.EMAIL, this.loginForm.email);
		Constante.login.email = this.loginForm.email;
		this.router.navigateByUrl('/');
		// Chamada ao servidor para autenticar
		// this.accountService.login2(this.loginForm).subscribe(
		// 	{
		// 		next: data => {
		// 			Library.usuarioLogado = data;
		// 			window.localStorage.setItem('token', 'lksjdf hadjfahldjkalhdald jkfahlds kjh laksj');
		// 			console.log(data);
		// 			this.toastService.openSeccessSnackBar("Bem vindo " + Library.usuarioLogado.email);
		// 			this.router.navigateByUrl('/create-account');
		// 		}
		// 	}
		// )
	}
}