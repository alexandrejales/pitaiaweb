import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FilialDto } from '../model/dto/filial-dto';
import { Filial } from '../model/entity/filial';
import { Constante } from '../resource/contante';

@Injectable({
	providedIn: 'root'
})
export class FilialService {

	constructor(private httpClient: HttpClient) { }

	findById(idFilial: number): Observable<FilialDto> {
		return this.httpClient.get<FilialDto>(Constante.API_URL + '/filiais/' + idFilial)
			.pipe(
				catchError(this.handleError)
			)
	}

	findAll(): Observable<FilialDto[]> {
		return this.httpClient.get<FilialDto[]>(Constante.API_URL + '/filiais')
			.pipe(
				catchError(this.handleError)
			)
	}

	create(filialDto: FilialDto): Observable<Filial> {
		return this.httpClient.post<Filial>(Constante.API_URL + '/filiais', filialDto)
			.pipe(
				catchError(this.handleError)
			)
	}

	update(filialDto: FilialDto): Observable<FilialDto> {
		return this.httpClient.put<FilialDto>(Constante.API_URL + '/filiais/' + filialDto.filialForm.id, filialDto)
			.pipe(
				catchError(this.handleError)
			)
	}

	delete(idFilial: number): Observable<any> {
		return this.httpClient.delete(Constante.API_URL + '/filiais/' + idFilial);
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
