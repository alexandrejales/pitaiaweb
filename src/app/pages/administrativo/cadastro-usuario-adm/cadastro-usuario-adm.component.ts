import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/entity/usuario';
import { EnderecoForm } from 'src/app/model/form/endereco-form';
import { PessoaForm } from 'src/app/model/form/pessoa-form';

@Component({
	selector: 'app-cadastro-usuario-adm',
	templateUrl: './cadastro-usuario-adm.component.html',
	styleUrls: ['./cadastro-usuario-adm.component.scss']
})
export class CadastroUsuarioAdmComponent implements OnInit {

	usuario: Usuario = new Usuario;
	enderecoForm: EnderecoForm = new EnderecoForm;
	pessoaForm: PessoaForm = new PessoaForm;

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		console.log(this.usuario);
	}

}
