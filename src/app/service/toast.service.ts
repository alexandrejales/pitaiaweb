import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackBarComponent } from '../layout/toast/alert-snack-bar/alert-snack-bar.component';
import { InfoSnackBarComponent } from '../layout/toast/info-snack-bar/info-snack-bar.component';
import { SuccessSnackBarComponent } from '../layout/toast/success-snack-bar/success-snack-bar.component';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private time = 5000;

    constructor(private snackBar: MatSnackBar) { }

    openSeccessSnackBar(mensagem: string): void {
        this.snackBar.openFromComponent(SuccessSnackBarComponent, {
            duration: this.time,
            data: mensagem
        });
    }

    openAlertSnackBar(mensagem: string): void {
        this.snackBar.openFromComponent(AlertSnackBarComponent, {
            duration: this.time,
            data: mensagem
        });
    }

    openInfoSnackBar(mensagem: string): void {
        this.snackBar.openFromComponent(InfoSnackBarComponent, {
            duration: this.time,
            data: mensagem
        });
    }
}
