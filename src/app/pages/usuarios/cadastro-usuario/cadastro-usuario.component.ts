import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioForm } from 'src/app/model/form/usuario-form';
import { ToastService } from 'src/app/service/toast.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
	selector: 'app-cadastro-usuario',
	templateUrl: './cadastro-usuario.component.html',
	styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

	usuarioForm: UsuarioForm = new UsuarioForm;
	idUsuario?: number;

	constructor(private router: Router,
		private toastService: ToastService, private usuarioService: UsuarioService,
		private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.idUsuario = this.activatedRoute.snapshot.params.idUsuario;

		if (!(this.idUsuario === undefined)) {
			this.onFindById(this.idUsuario);
		}
	}

	onFindById(id: number) {
		this.usuarioService.findById(id).subscribe(
			{
				next: data => {
					this.usuarioForm = data;
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar(error.error);
					this.router.navigate(['/usuarios']);
				}
			}
		);
	}

	onSave() {
		if (this.idUsuario === undefined) {
			this.onCreate();
		} else {
			this.onUpdate();
		}
	}
	onCreate() {
		this.usuarioService.create(this.usuarioForm).subscribe(
			{
				next: data => {
					this.toastService.openSeccessSnackBar("Usuário cadastrado com sucesso");
					this.router.navigate(['/usuarios/cadastro/', data.infoAcessoForm.id]);
				},
				error: error => {
					this.toastService.openAlertSnackBar(error.error);
				}
			}
		)
	}

	onUpdate() {
		this.usuarioService.update(this.usuarioForm).subscribe(
			{
				next: data => {
					this.toastService.openSeccessSnackBar("Usuário atualizado com sucesso");
				},
				error: error => {
					this.toastService.openAlertSnackBar(error.error);
				}
			}
		)
	}

	onDelete() {
		if (this.idUsuario != undefined) {
			this.usuarioService.delete(this.idUsuario).subscribe(
				{
					next: data => {
						this.toastService.openSeccessSnackBar("Usuário deletado com sucesso");
						this.router.navigate(['/usuarios']);
					},
					error: error => {
						this.toastService.openAlertSnackBar(error.error);
					}
				}

			)
		}
	}
}
