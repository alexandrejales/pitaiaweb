import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { LoginForm } from 'src/app/model/form/login-form';
import { ToastService } from 'src/app/service/toast.service';
import { Constantes } from 'src/app/resource/contante';
import { PayloadJWT } from 'src/app/model/dto/payload-jwt';
import { RootComponent } from 'src/app/layout/root/root.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    durationInSeconds = 5;
    loginForm: LoginForm = new LoginForm();
    hide = true;

    constructor(private accountService: AccountService, private router: Router, private toastService: ToastService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.logar();
    }

    logar(): void {
        RootComponent.showProgress();

        // Chamada ao servidor para autenticar
        this.accountService.login(this.loginForm).subscribe(
            {
                next: data => {
                    const payloadJWT: PayloadJWT = this.accountService.decodePayloadJWT(data.token);
                    window.localStorage.setItem(Constantes.TOKEN, data.token);
                    window.localStorage.setItem(Constantes.EMAIL, payloadJWT.email);
                    window.localStorage.setItem(Constantes.CONTA_ID, payloadJWT.conta);
                    window.localStorage.setItem(Constantes.EXP, payloadJWT.exp.toString());
                    window.localStorage.setItem(Constantes.IAT, payloadJWT.iat.toString());
                    window.localStorage.setItem(Constantes.PERFIL, payloadJWT.perfil);
                    window.localStorage.setItem(Constantes.USUARIO_ID, payloadJWT.usuario);

                    this.toastService.openSeccessSnackBar('Bem vindo ' + payloadJWT.email);
                    this.router.navigate(['/']);
                    RootComponent.hiddenProgress();
                },
                error: () => {
                    this.toastService.openAlertSnackBar('Falha interna, tente mais tarde');
                    RootComponent.hiddenProgress();
                }
            }
        );
    }
}
