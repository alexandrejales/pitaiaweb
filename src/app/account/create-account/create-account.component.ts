import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationComponent } from 'src/app/layout/authentication/authentication.component';
import { CriarContaForm } from 'src/app/model/form/criar-conta-form';
import { AccountService } from '../shared/account.service';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

    criarContaForm: CriarContaForm = new CriarContaForm();
    hide = true;

    constructor(private accountService: AccountService, private router: Router) { }

    ngOnInit(): void {
    }

    // Cria Nova Conta
    onSubmit(): void {
        AuthenticationComponent.showProgress();
        console.log('Criando Usuario');
        this.accountService.createAccount(this.criarContaForm).subscribe(
            {
                next: () => {
                    this.router.navigate(['/']);
                    AuthenticationComponent.hiddenProgress();
                },
                error: () => {
                    AuthenticationComponent.hiddenProgress();
                }
            }

        );
    }
}
