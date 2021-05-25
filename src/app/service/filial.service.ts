import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FilialDto } from '../model/dto/filial-dto';
import { Filial } from '../model/entity/filial';
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

	delete(idFilial: number): Observable<any> {
		return this.httpClient.delete(Library.API_URL + '/filiais/' + idFilial);
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
