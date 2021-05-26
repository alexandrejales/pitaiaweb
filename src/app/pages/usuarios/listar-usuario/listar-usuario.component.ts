import { Component, OnInit } from '@angular/core';
import { UsuarioForm } from 'src/app/model/form/usuario-form';
import { ToastService } from 'src/app/service/toast.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
	selector: 'app-listar-usuario',
	templateUrl: './listar-usuario.component.html',
	styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

	displayedColumns: string[] = ['item', 'nome', 'email', 'tipo', 'bloqueado', 'acao'];
	usuarioFormList: UsuarioForm[] = [];
	index: number = 0;

	constructor(private usuarioService: UsuarioService, private toastService: ToastService) { }

	ngOnInit(): void {
		this.onFindAll();
	}

	onFindAll() {
		this.usuarioService.findAll().subscribe(
			{
				next: data => {
					this.usuarioFormList = data;
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar("Erro ao carregar os dados");
				}
			}
		);
	}
}
