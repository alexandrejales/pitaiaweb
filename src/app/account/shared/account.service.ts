import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CreateAccountDto } from 'src/app/model/dto/create-account-dto';
import { Login } from 'src/app/model/login';
import { Usuario } from 'src/app/model/usuario';
import { Library } from 'src/app/resource/library';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};
	//Contrutor
	constructor(private httpClient: HttpClient) { }

	login(login: Login): Observable<Login> {
		return this.httpClient.post<Usuario>(Library.API_URL + '/teste', login, this.httpOptions)
			.pipe(
				retry(1),
				catchError(this.handleError)
			)
	}

	createAccount(createAccount: CreateAccountDto): Observable<CreateAccountDto> {
		return this.httpClient.post<CreateAccountDto>(Library.API_URL + '/teste', createAccount, this.httpOptions)
			.pipe(
				retry(1),
				catchError(this.handleError)
			)
	}

	// Manipulação de erros
	handleError(error: HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Erro ocorreu no lado do client
			errorMessage = error.error.message;
		} else {
			// Erro ocorreu no lado do servidor
			errorMessage = 'Código do erro: ${error.status}, ' + 'menssagem: ${error.message}';
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	};
}
