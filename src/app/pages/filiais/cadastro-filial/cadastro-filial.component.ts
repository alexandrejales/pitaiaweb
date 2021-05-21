import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/entity/empresa';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/service/toast.service';
import { Endereco } from 'src/app/model/entity/endereco';

@Component({
	selector: 'app-cadastro-filial',
	templateUrl: './cadastro-filial.component.html',
	styleUrls: ['./cadastro-filial.component.scss']
})
export class CadastroFilialComponent implements OnInit {

	empresa: Empresa = new Empresa;
	endereco: Endereco = new Endereco;

	constructor(private http: HttpClient, private router: Router, private toastService: ToastService) {

	}

	ngOnInit(): void {
		//Verificar se rota tem parametro de id para carregar componente
	}

	onSubmit() {
		console.log(this.empresa);
		console.log(this.endereco);
		console.log("Teste de button");
		this.toastService.openSeccessSnackBar("Filial cadastrada com sucesso");
		this.router.navigateByUrl('/filiais');
	}
}
