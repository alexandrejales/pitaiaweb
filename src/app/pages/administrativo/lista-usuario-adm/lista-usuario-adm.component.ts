import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/entity/endereco';
import { Pessoa } from 'src/app/model/entity/pessoa';
import { Usuario } from 'src/app/model/entity/usuario';

const USUARIO_DATA: Usuario[] = [
	{ id: 1, email: 'alexandre.jales@hotmail.com', senha: '', bloqueado: false, manterConectado: false, ultimoLogin: new Date, tipo: 'Admin', dataCadastro: new Date, dataDesativacao: new Date, endereco: new Endereco, pessoa: new Pessoa },
	{ id: 2, email: 'alexandre.jales@hotmail.com', senha: '', bloqueado: false, manterConectado: false, ultimoLogin: new Date, tipo: 'Admin', dataCadastro: new Date, dataDesativacao: new Date, endereco: new Endereco, pessoa: new Pessoa },
	{ id: 3, email: 'alexandre.jales@hotmail.com', senha: '', bloqueado: false, manterConectado: false, ultimoLogin: new Date, tipo: 'Admin', dataCadastro: new Date, dataDesativacao: new Date, endereco: new Endereco, pessoa: new Pessoa },
	{ id: 4, email: 'alexandre.jales@hotmail.com', senha: '', bloqueado: false, manterConectado: false, ultimoLogin: new Date, tipo: 'Admin', dataCadastro: new Date, dataDesativacao: new Date, endereco: new Endereco, pessoa: new Pessoa },
	{ id: 5, email: 'alexandre.jales@hotmail.com', senha: '', bloqueado: false, manterConectado: false, ultimoLogin: new Date, tipo: 'Admin', dataCadastro: new Date, dataDesativacao: new Date, endereco: new Endereco, pessoa: new Pessoa },
];


@Component({
	selector: 'app-lista-usuario-adm',
	templateUrl: './lista-usuario-adm.component.html',
	styleUrls: ['./lista-usuario-adm.component.scss']
})
export class ListaUsuarioAdmComponent implements OnInit {

	displayedColumns: string[] = ['id', 'email', 'bloqueado', 'ultimoLogin', 'tipo', 'acao'];
	dataSource = USUARIO_DATA;

	constructor() { }

	ngOnInit(): void {
	}
}
