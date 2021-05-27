import { Component, OnInit } from '@angular/core';
import { ColaboradorListarDto } from 'src/app/model/dto/colaborador-listar-dto';
import { InfoColaboradorForm } from 'src/app/model/form/info-colaborador-form';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
	selector: 'app-colaborador-listar',
	templateUrl: './colaborador-listar.component.html',
	styleUrls: ['./colaborador-listar.component.scss']
})
export class ColaboradorListarComponent implements OnInit {

	displayedColumns: string[] = ['item', 'cpf', 'nome', 'filial', 'cargo', 'bloqueado', 'acao'];
	colaboradorListarDto: ColaboradorListarDto[] = [];
	index: number = 0;

	constructor(private colaboradorService: ColaboradorService, private toastService: ToastService) { }

	ngOnInit(): void {
		this.onFindAll();
	}

	onFindAll() {
		this.colaboradorService.findAll().subscribe(
			{
				next: data => {
					this.colaboradorListarDto = data;
				},
				error: error => {
					//Imprime erro da exception da API
					this.toastService.openAlertSnackBar("Erro ao carregar os dados");
				}
			}
		);
	}
}
