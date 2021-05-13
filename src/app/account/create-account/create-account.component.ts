import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAccountDto } from 'src/app/model/dto/create-account-dto';
import { Usuario } from 'src/app/model/usuario';
import { AccountService } from '../shared/account.service';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

    createAccount: CreateAccountDto = new CreateAccountDto();
    hide: boolean = true;

    constructor(private accountService: AccountService) { }

    ngOnInit(): void {
    }

    //Cria Nova Conta
    onSubmit(form: NgForm) {
        this.accountService.createAccount(this.createAccount).subscribe(
            () => {
                this.cleanForm(form);
            }
        );
    }

    //Limpa Formulário
    cleanForm(form: NgForm) {
        form.resetForm();
        this.createAccount = {} as CreateAccountDto;
    }

}
