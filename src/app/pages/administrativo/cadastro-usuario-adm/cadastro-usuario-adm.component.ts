import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/entity/usuario';

@Component({
	selector: 'app-cadastro-usuario-adm',
	templateUrl: './cadastro-usuario-adm.component.html',
	styleUrls: ['./cadastro-usuario-adm.component.scss']
})
export class CadastroUsuarioAdmComponent implements OnInit {

	usuario: Usuario = new Usuario;

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		console.log(this.usuario);
	}

}
