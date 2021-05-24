import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/entity/endereco';
import { Filial } from 'src/app/model/entity/filial';

const EMPRESA_DATA: Filial[] = [
	{ id: 1, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 1', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 2, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 2', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 3, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 3', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 4, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 4', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 5, bloqueado: true, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 5', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 6, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 6', inscricaoEstadual: '28452649', endereco: new Endereco },
	{ id: 7, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 7', inscricaoEstadual: '28452649', endereco: new Endereco },
];

@Component({
	selector: 'app-lista-filial',
	templateUrl: './lista-filial.component.html',
	styleUrls: ['./lista-filial.component.scss']
})
export class ListaFilialComponent implements OnInit {

	displayedColumns: string[] = ['id', 'bloqueado', 'cnpj', 'nomeFantasia', 'inscricaoEstadual', 'acao'];
	dataSource = EMPRESA_DATA;
	filtroValor: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	applyFilter(event: Event) {
		console.log("chamou");
		let res: Filial[] = this.dataSource.filter(this.dataFiltro);
		console.log(res);
		//this.dataSource.filter = filterValue.trim().toLowerCase();

	}

	dataFiltro(element: Filial, index: number, array: Filial[]) {
		console.log(this.filtroValor);
		let filtro: string = this.filtroValor.trim().toLowerCase();
		console.log("Filtro: " + filtro);
		if (element.id.toString().toLowerCase().includes(filtro)) {
			return true;
		}

		if (element.cnpj.toLowerCase().includes(filtro)) {
			return true;
		}

		if (element.nomeFantasia.toLowerCase().includes(filtro)) {
			return true;
		}

		if (element.inscricaoEstadual.toLowerCase().includes(filtro)) {
			return true;
		}
		return true;
	}

}
