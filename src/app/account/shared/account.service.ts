import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenDto } from 'src/app/model/dto/token-dto';
import { CriarContaForm } from 'src/app/model/form/criar-conta-form';
import { LoginForm } from 'src/app/model/form/login-form';
import { Constantes } from 'src/app/resource/contante';
import { ToastService } from 'src/app/service/toast.service';
import jwt_decode from 'jwt-decode';
import { PayloadJWT } from 'src/app/model/dto/payload-jwt';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private httpClient: HttpClient, private toastService: ToastService) { }

    login(loginForm: LoginForm): Observable<TokenDto> {

        return this.httpClient.post<TokenDto>(Constantes.API_URL + '/auth', loginForm)
            .pipe(
                catchError(this.handleError)
            );
    }

    createAccount(criarContaForm: CriarContaForm): Observable<CriarContaForm> {
        return this.httpClient.post<CriarContaForm>(Constantes.API_URL + '/conta/criar', criarContaForm)
            .pipe(
                catchError(this.handleError)
            );
    }

    logout(): void {
        window.localStorage.clear();
    }

    public decodePayloadJWT(token: string): PayloadJWT {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return new PayloadJWT();
        }
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse): Observable<any> {

        if (error.status === 403) {
            console.log('Email ou senha inválidos.');
            this.toastService.openAlertSnackBar(error.error.mensagem);
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
    }
}
