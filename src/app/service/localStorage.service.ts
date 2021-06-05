import { Injectable } from '@angular/core';
import { Constantes } from '../resource/contante';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    getChaveDispositivo(): string | null {
        return window.localStorage.getItem(Constantes.DISPOSITIVO_CHAVE);
    }

    isChaveDispositivoExiste(): boolean {
        return window.localStorage.getItem(Constantes.DISPOSITIVO_CHAVE) === null ? false : true;
    }
}
