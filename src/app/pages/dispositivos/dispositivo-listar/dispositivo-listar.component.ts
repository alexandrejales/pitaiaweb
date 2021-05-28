import { Component, OnInit } from '@angular/core';
import { DispositivoForm } from 'src/app/model/form/dispositivo-form';
import { DispositivoService } from 'src/app/service/dispositivo.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
	selector: 'app-dispositivo-listar',
	templateUrl: './dispositivo-listar.component.html',
	styleUrls: ['./dispositivo-listar.component.scss']
})
export class DispositivoListarComponent implements OnInit {

	displayedColumns: string[] = ['item', 'nome', 'filialRazaoSocial', 'dataExpiracao', 'bloqueado', 'acao'];
	dados: DispositivoForm[] = [];
	index: number = 0;

	constructor(private dispositivoService: DispositivoService, private toastService: ToastService) { }

	ngOnInit(): void {
		this.onFindAll();
	}

	onFindAll() {
		this.dispositivoService.findAll().subscribe(
			{
				next: data => {
					this.dados = data;
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar("Erro ao carregar os dados");
				}
			}
		);
	}

}
