import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/service/toast.service';
import { EnderecoForm } from 'src/app/model/form/endereco-form';
import { FilialForm } from 'src/app/model/form/cadastro-filial-form';

@Component({
	selector: 'app-cadastro-filial',
	templateUrl: './cadastro-filial.component.html',
	styleUrls: ['./cadastro-filial.component.scss']
})
export class CadastroFilialComponent implements OnInit {

	filial: FilialForm = new FilialForm;
	endereco: EnderecoForm = new EnderecoForm;

	constructor(private http: HttpClient, private router: Router, private toastService: ToastService) {

	}

	ngOnInit(): void {
		//Verificar se rota tem parametro de id para carregar componente
	}

	onSubmit() {
		console.log(this.filial);
		console.log(this.endereco);
		console.log("Teste de button");
		this.toastService.openSeccessSnackBar("Filial cadastrada com sucesso");
		this.router.navigateByUrl('/filiais');
	}
}
