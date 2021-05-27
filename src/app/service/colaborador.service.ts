import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ColaboradorListarDto } from '../model/dto/colaborador-listar-dto';
import { InfoColaboradorForm } from '../model/form/info-colaborador-form';
import { Library } from '../resource/library';

@Injectable({
	providedIn: 'root'
})
export class ColaboradorService {

	constructor(private httpClient: HttpClient) { }

	findById(idColaborador: number): Observable<InfoColaboradorForm> {
		return this.httpClient.get<InfoColaboradorForm>(Library.API_URL + '/colaboradores/' + idColaborador)
			.pipe(
				catchError(this.handleError)
			)
	}

	findAll(): Observable<ColaboradorListarDto[]> {
		return this.httpClient.get<ColaboradorListarDto[]>(Library.API_URL + '/colaboradores')
			.pipe(
				catchError(this.handleError)
			)
	}

	create(infoColaboradorForm: InfoColaboradorForm): Observable<InfoColaboradorForm> {
		return this.httpClient.post<InfoColaboradorForm>(Library.API_URL + '/colaboradores', infoColaboradorForm)
			.pipe(
				catchError(this.handleError)
			)
	}

	update(infoColaboradorForm: InfoColaboradorForm): Observable<InfoColaboradorForm> {
		return this.httpClient.put<InfoColaboradorForm>(Library.API_URL + '/colaboradores/' + infoColaboradorForm.id, infoColaboradorForm)
			.pipe(
				catchError(this.handleError)
			)
	}

	delete(idColaborador: number): Observable<any> {
		return this.httpClient.delete(Library.API_URL + '/colaboradores/' + idColaborador);
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
