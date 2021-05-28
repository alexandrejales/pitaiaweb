import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DispositivoDto } from '../model/dto/dispositivo-dto';
import { DispositivoForm } from '../model/form/dispositivo-form';
import { Constante } from '../resource/contante';

@Injectable({
	providedIn: 'root'
})
export class DispositivoService {

	constructor(private httpClient: HttpClient) { }

	findById(id: number): Observable<DispositivoDto> {
		console.log("Chamou");
		return this.httpClient.get<DispositivoDto>(Constante.API_URL + '/dispositivos/' + id)
			.pipe(
				catchError(this.handleError)
			)
	}

	findAll(): Observable<DispositivoDto[]> {
		return this.httpClient.get<DispositivoDto[]>(Constante.API_URL + '/dispositivos')
			.pipe(
				catchError(this.handleError)
			)
	}

	create(form: DispositivoForm): Observable<DispositivoForm> {
		return this.httpClient.post<DispositivoForm>(Constante.API_URL + '/dispositivos', form)
			.pipe(
				catchError(this.handleError)
			)
	}

	update(form: DispositivoForm): Observable<DispositivoForm> {
		return this.httpClient.put<DispositivoForm>(Constante.API_URL + '/dispositivos/' + form.id, form)
			.pipe(
				catchError(this.handleError)
			)
	}

	delete(id: number): Observable<any> {
		return this.httpClient.delete(Constante.API_URL + '/dispositivos/' + id);
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
