import { Component, Input, OnInit } from '@angular/core';
import { EnderecoForm } from 'src/app/model/form/endereco-form';

@Component({
	selector: 'app-endereco-form',
	templateUrl: './endereco-form.component.html',
	styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

	@Input()
	endereco: EnderecoForm = new EnderecoForm;

	constructor() {
	}

	ngOnInit(): void {
	}
}
