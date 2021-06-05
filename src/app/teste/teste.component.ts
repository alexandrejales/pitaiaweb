import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginForm } from '../model/form/login-form';
import { UsuarioForm } from '../model/form/usuario-form';
import { ToastService } from '../service/toast.service';
import { UsuarioService } from '../service/usuario.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
	selector: 'app-teste',
	templateUrl: './teste.component.html',
	styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

	loginForm: LoginForm = new LoginForm();
	hide: boolean = true;
	usuarioFormList: UsuarioForm[] = [];
	usuarios: string = 'Usuarios: Vazio';
	apiexterna: string = 'Api Externa';

	constructor(public dialog: MatDialog, private usuarioService: UsuarioService, private toastService: ToastService) { }

	openDialog() {
		const dialogRef = this.dialog.open(UserDialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

	onSubmit() {
		console.log("Firmulario submetido");
	}

	ngOnInit(): void {
		this.onFindAllTeste();
		this.onFindOneTeste();

	}

	onFindOneTeste() {
		this.usuarioService.onFindOneTeste().subscribe(
			{
				next: data => {
					this.apiexterna = JSON.stringify(data);
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar("Erro Api Externa");
				}
			}
		);
	}

	onFindAllTeste() {
		this.usuarioService.onFindAllTeste().subscribe(
			{
				next: data => {
					this.usuarioFormList = data;
					this.usuarios = JSON.stringify(this.usuarioFormList);
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar("Erro ao carregar os dados");
				}
			}
		);
	}
}