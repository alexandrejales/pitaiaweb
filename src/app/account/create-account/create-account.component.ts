import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CriarContaForm } from 'src/app/model/form/criar-conta-form';
import { AccountService } from '../shared/account.service';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

    criarContaForm: CriarContaForm = new CriarContaForm();
    hide: boolean = true;

    constructor(private accountService: AccountService, private router: Router) { }

    ngOnInit(): void {
    }

    //Cria Nova Conta
    onSubmit() {
        this.accountService.createAccount(this.criarContaForm).subscribe(
            () => this.router.navigate(['/'])
        );
    }
}