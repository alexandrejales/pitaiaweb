import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/entity/endereco';

@Component({
	selector: 'app-endereco-form',
	templateUrl: './endereco-form.component.html',
	styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

	@Input()
	endereco: Endereco = new Endereco;

	constructor() {
	}

	ngOnInit(): void {
	}
}
