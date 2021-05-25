import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FilialDto } from '../model/dto/filial-dto';
import { Filial } from '../model/entity/filial';
import { FilialForm } from '../model/form/cadastro-filial-form';
import { Library } from '../resource/library';
import { ToastService } from './toast.service';

@Injectable({
	providedIn: 'root'
})
export class FilialService {

	constructor(private httpClient: HttpClient, private toastService: ToastService) { }

	findById(idFilial: number): Observable<FilialDto> {
		return this.httpClient.get<FilialDto>(Library.API_URL + '/filiais/' + idFilial)
			.pipe(
				catchError(this.handleError)
			)
	}

	create(filialDto: FilialDto): Observable<Filial> {
		return this.httpClient.post<Filial>(Library.API_URL + '/filiais', filialDto)
			.pipe(
				catchError(this.handleError)
			)
	}

	teste(): Observable<string> {
		return this.httpClient.get<string>(Library.API_URL + '/teste')
			.pipe(
				catchError(this.handleError)
			)
	}

	// Manipulação de erros
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// Erro ocorreu no lado do client
			this.toastService.openSeccessSnackBar(error.error.message);
		} else {
			this.toastService.openSeccessSnackBar(error.error.toString());
		}
		console.log(error.error);
		return throwError(error);
	};
}
