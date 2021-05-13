import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/model/colaborador';

@Component({
	selector: 'app-colaborador-cadastro',
	templateUrl: './colaborador-cadastro.component.html',
	styleUrls: ['./colaborador-cadastro.component.scss']
})
export class ColaboradorCadastroComponent implements OnInit {

	colaborador: Colaborador = new Colaborador();
	hide: boolean = true;

	constructor() { }

	ngOnInit(): void {
	}
}
