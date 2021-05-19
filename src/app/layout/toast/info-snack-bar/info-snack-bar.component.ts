import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
	selector: 'app-info-snack-bar',
	templateUrl: './info-snack-bar.component.html',
	styleUrls: ['./info-snack-bar.component.scss']
})
export class InfoSnackBarComponent implements OnInit {

	mensagem: string = '';

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {
		this.mensagem = data;
	}

	ngOnInit(): void {
	}

}
