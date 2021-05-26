import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Filial } from '../model/entity/filial';
import { UsuarioForm } from '../model/form/usuario-form';
import { Library } from '../resource/library';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	constructor(private httpClient: HttpClient) { }

	findById(idUsuario: number): Observable<UsuarioForm> {
		return this.httpClient.get<UsuarioForm>(Library.API_URL + '/usuarios/' + idUsuario)
			.pipe(
				catchError(this.handleError)
			)
	}

	findAll(): Observable<UsuarioForm[]> {
		return this.httpClient.get<UsuarioForm[]>(Library.API_URL + '/usuarios')
			.pipe(
				catchError(this.handleError)
			)
	}

	create(usuarioForm: UsuarioForm): Observable<UsuarioForm> {
		console.log("Chamou create api");
		return this.httpClient.post<UsuarioForm>(Library.API_URL + '/usuarios', usuarioForm)
			.pipe(
				catchError(this.handleError)
			)
	}

	update(usuarioForm: UsuarioForm): Observable<UsuarioForm> {
		console.log("Chamou api Update")
		return this.httpClient.put<UsuarioForm>(Library.API_URL + '/usuarios/' + usuarioForm.infoAcessoForm?.id, usuarioForm)
			.pipe(
				catchError(this.handleError)
			)
	}

	delete(idUsuario: number): Observable<any> {
		return this.httpClient.delete(Library.API_URL + '/usuarios/' + idUsuario);
	}

	// Manipulação de erros
	handleError(error: HttpErrorResponse) {
		if (error instanceof ErrorEvent) {
			console.log("Erro Angular");
			//this.toastService.openSeccessSnackBar(error.error);
		} else {
			console.log("Erro Api");
		}
		return throwError(error);
	};
}
