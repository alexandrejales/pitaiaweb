import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioForm } from '../model/form/usuario-form';
import { Constante } from '../resource/contante';
import { Library } from '../resource/library';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	getChaveDispositivo(): string | null {
		return window.localStorage.getItem(Constante.DISPOSITIVO_CHAVE);
	}

	isChaveDispositivoExiste(): boolean {
		return window.localStorage.getItem(Constante.DISPOSITIVO_CHAVE) === null ? false : true;
	}
}
