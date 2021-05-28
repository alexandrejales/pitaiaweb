import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilialDto } from 'src/app/model/dto/filial-dto';
import { DispositivoForm } from 'src/app/model/form/dispositivo-form';
import { Constante } from 'src/app/resource/contante';
import { DispositivoService } from 'src/app/service/dispositivo.service';
import { FilialService } from 'src/app/service/filial.service';
import { LocalStorageService } from 'src/app/service/localStorage.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
	selector: 'app-dispositivo-cadastro',
	templateUrl: './dispositivo-cadastro.component.html',
	styleUrls: ['./dispositivo-cadastro.component.scss']
})
export class DispositivoCadastroComponent implements OnInit {

	dispositivoAtualJaCadastrado: boolean = false;
	form: DispositivoForm = new DispositivoForm;
	hide: boolean = true;
	idDispositivo?: number;
	filiais: FilialDto[] = [];

	constructor(private router: Router, private dispositivoService: DispositivoService, private filialService: FilialService,
		private toastService: ToastService, private activatedRoute: ActivatedRoute,
		private localStorageService: LocalStorageService) {
	}

	ngOnInit(): void {

		this.dispositivoAtualJaCadastrado = this.localStorageService.isChaveDispositivoExiste();

		this.idDispositivo = this.activatedRoute.snapshot.params.idDispositivo;

		if (!(this.idDispositivo === undefined)) {
			this.onFindById(this.idDispositivo);
		}

		this.filialService.findAll().subscribe(
			{
				next: data => {
					this.filiais = data;
				},
				error: erro => {
					this.toastService.openAlertSnackBar("Não foi possivel carregar as filiais");
				}
			}
		);
	}

	onFindById(id: number) {
		this.dispositivoService.findById(id).subscribe(
			{
				next: data => {
					this.form = data;
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar(error.error);
					this.router.navigate(['/dispositivos']);
				}
			}
		);
	}

	onSave() {
		if (this.idDispositivo === undefined) {
			this.onCreate();
		} else {
			this.onUpdate();
		}
	}

	onCreate() {
		this.dispositivoService.create(this.form).subscribe(
			{
				next: data => {
					window.localStorage.setItem(Constante.DISPOSITIVO_CHAVE, data.chave === undefined ? '' : data.chave);
					this.toastService.openSeccessSnackBar("Dispositivo atual cadastrado com sucesso");
					this.router.navigate(['/dispositivos/cadastro/', data.id]);
				},
				error: error => {
					this.toastService.openAlertSnackBar(error.error);
				}
			}
		)
	}

	onUpdate() {
		this.dispositivoService.update(this.form).subscribe(
			{
				next: data => {
					this.toastService.openSeccessSnackBar("Dispositivo atualizado com sucesso");
				},
				error: error => {
					this.toastService.openAlertSnackBar(error.error);
				}
			}
		)
	}

	onDelete() {
		if (this.idDispositivo != undefined) {
			this.dispositivoService.delete(this.idDispositivo).subscribe(
				{
					next: data => {
						this.toastService.openSeccessSnackBar("Dispositivo deletado com sucesso");
						this.router.navigate(['/dispositivos']);
					},
					error: error => {
						this.toastService.openAlertSnackBar(error.error);
					}
				}
			)
		}
	}
}
