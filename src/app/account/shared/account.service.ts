import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { TokenDto } from 'src/app/model/dto/token-dto';
import { UsuarioDto } from 'src/app/model/dto/usuario-dto';
import { CriarContaForm } from 'src/app/model/form/criar-conta-form';
import { LoginForm } from 'src/app/model/form/login-form';
import { Constante } from 'src/app/resource/contante';
import { Library } from 'src/app/resource/library';
import { ToastService } from 'src/app/service/toast.service';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		}),
	};

	constructor(private httpClient: HttpClient, private toastService: ToastService) { }

	login(loginForm: LoginForm) {
		this.httpClient.post<UsuarioDto>(Library.API_URL + '/conta/logar', loginForm, this.httpOptions)
			.subscribe(
				{
					next: data => {
						Library.usuarioLogado = data;
						window.localStorage.setItem('token', 'lksjdf hadjfahldjkalhdald jkfahlds kjh laksj');
						console.log(data);
					},
					error: error => {
						console.log(error.message);
					}
				}
			)
	}

	login2(loginForm: LoginForm): Observable<TokenDto> {

		return this.httpClient.post<TokenDto>(Library.API_URL + '/auth', loginForm, this.httpOptions)
			.pipe(
				catchError(this.handleError)
			)
	}

	createAccount(criarContaForm: CriarContaForm): Observable<CriarContaForm> {
		return this.httpClient.post<CriarContaForm>(Library.API_URL + '/conta/criar', criarContaForm, this.httpOptions)
			.pipe(
				retry(1),
				catchError(this.handleError)
			)
	}

	logout() {
		window.localStorage.removeItem(Constante.EMAIL);
		window.localStorage.removeItem(Constante.TOKEN);
	}

	// Manipulação de erros
	handleError(error: HttpErrorResponse) {

		if (error.status == 403) {
			console.log("Email ou senha inválidos.");
			let msg: string = error.error.mensagem;

			this.toastService.openAlertSnackBar("Deu Erro");
			return throwError(error.error.mensagem);
		} else {
			let errorMessage = '';
			if (error.error instanceof ErrorEvent) {
				// Erro ocorreu no lado do client
				errorMessage = error.error.message;
			} else {

				errorMessage = 'Código do erro: ' + error.status + ' Menssagem: ' + error.message;
			}
			console.log(errorMessage);
			return throwError(errorMessage);
		}
	};
}