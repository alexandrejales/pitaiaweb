import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioForm } from '../model/form/usuario-form';
import { Constantes } from '../resource/contante';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    onFindAllTeste(): Observable<UsuarioForm[]> {
        return this.httpClient.get<UsuarioForm[]>(Constantes.API_URL + '/teste')
            .pipe(
                catchError(this.handleError)
            )
    }

    onFindOneTeste(): Observable<string> {
        return this.httpClient.get<string>('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(
                catchError(this.handleError)
            )
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    constructor(private httpClient: HttpClient) { }

    findById(idUsuario: number): Observable<UsuarioForm> {
        return this.httpClient.get<UsuarioForm>(Constantes.API_URL + '/usuarios/' + idUsuario)
            .pipe(
                catchError(this.handleError)
            );
    }

    findAll(): Observable<UsuarioForm[]> {
        return this.httpClient.get<UsuarioForm[]>(Constantes.API_URL + '/usuarios')
            .pipe(
                catchError(this.handleError)
            );
    }

    create(usuarioForm: UsuarioForm): Observable<UsuarioForm> {
        return this.httpClient.post<UsuarioForm>(Constantes.API_URL + '/usuarios', usuarioForm)
            .pipe(
                catchError(this.handleError)
            );
    }

    update(usuarioForm: UsuarioForm): Observable<UsuarioForm> {
        return this.httpClient.put<UsuarioForm>(Constantes.API_URL + '/usuarios/' + usuarioForm.infoAcessoForm?.id, usuarioForm)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(idUsuario: number): Observable<any> {
        return this.httpClient.delete(Constantes.API_URL + '/usuarios/' + idUsuario);
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse): Observable<any> {
        if (error instanceof ErrorEvent) {

        } else {

        }
        return throwError(error);
    }
}
