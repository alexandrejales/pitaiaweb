import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Filial } from '../model/entity/filial';
import { FilialForm } from '../model/form/cadastro-filial-form';
import { Library } from '../resource/library';
import { ToastService } from './toast.service';

@Injectable({
	providedIn: 'root'
})
export class FilialService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		}),
	};

	constructor(private httpClient: HttpClient, private toastService: ToastService) { }

	create(loginForm: FilialForm): Observable<Filial> {

		return this.httpClient.post<Filial>(Library.API_URL + '/auth', loginForm, this.httpOptions)
			.pipe(
				catchError(this.handleError)
			)
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
