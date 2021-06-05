import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DispositivoDto } from '../model/dto/dispositivo-dto';
import { DispositivoForm } from '../model/form/dispositivo-form';
import { Constantes } from '../resource/contante';

@Injectable({
    providedIn: 'root'
})
export class DispositivoService {

    constructor(private httpClient: HttpClient) { }

    findById(id: number): Observable<DispositivoDto> {
        return this.httpClient.get<DispositivoDto>(Constantes.API_URL + '/dispositivos/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    findAll(): Observable<DispositivoDto[]> {
        return this.httpClient.get<DispositivoDto[]>(Constantes.API_URL + '/dispositivos')
            .pipe(
                catchError(this.handleError)
            );
    }

    create(form: DispositivoForm): Observable<DispositivoForm> {
        return this.httpClient.post<DispositivoForm>(Constantes.API_URL + '/dispositivos', form)
            .pipe(
                catchError(this.handleError)
            );
    }

    update(form: DispositivoForm): Observable<DispositivoForm> {
        return this.httpClient.put<DispositivoForm>(Constantes.API_URL + '/dispositivos/' + form.id, form)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(Constantes.API_URL + '/dispositivos/' + id);
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse): Observable<any> {
        if (error instanceof ErrorEvent) {

        } else {
        }
        return throwError(error);
    }
}
