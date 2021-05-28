import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/model/form/login-form';
import { ToastService } from 'src/app/service/toast.service';
import { Constante } from 'src/app/resource/contante';
import { PayloadJWT } from 'src/app/model/dto/payload-jwt';


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

	ngOnInit(): void {
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
					let payloadJWT: PayloadJWT = this.accountService.decodePayloadJWT(data.token);
					window.localStorage.setItem(Constante.TOKEN, data.token);
					window.localStorage.setItem(Constante.EMAIL, payloadJWT.email);
					window.localStorage.setItem(Constante.CONTA_ID, payloadJWT.conta);
					window.localStorage.setItem(Constante.EXP, payloadJWT.exp.toString());
					window.localStorage.setItem(Constante.IAT, payloadJWT.iat.toString());
					window.localStorage.setItem(Constante.PERFIL, payloadJWT.perfil);
					window.localStorage.setItem(Constante.USUARIO_ID, payloadJWT.usuario);

					this.toastService.openSeccessSnackBar("Bem vindo " + payloadJWT.email);
					this.router.navigate(['/']);
				},
				error: () => {
					this.toastService.openSeccessSnackBar("Falha interna ao realizar Login, tente em alguns instantes");
				}
			}
		)

		this.loginForm.senha = '';
	}
}