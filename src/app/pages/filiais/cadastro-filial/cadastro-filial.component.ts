import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/service/toast.service';
import { FilialService } from 'src/app/service/filial.service';
import { FilialDto } from 'src/app/model/dto/filial-dto';

@Component({
	selector: 'app-cadastro-filial',
	templateUrl: './cadastro-filial.component.html',
	styleUrls: ['./cadastro-filial.component.scss']
})
export class CadastroFilialComponent implements OnInit {
	filialDto: FilialDto = new FilialDto;
	idFilial?: number;

	constructor(private http: HttpClient, private router: Router,
		private toastService: ToastService, private filialService: FilialService,
		private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.idFilial = this.activatedRoute.snapshot.params.idFilial;
		console.log(this.idFilial);

		if (!(this.idFilial === undefined)) {
			this.filialService.findById(this.idFilial).subscribe(
				{
					next: data => {
						this.filialDto = data;
					},
					error: () => {
						this.router.navigate(['/filiais']);
						this.toastService.openAlertSnackBar("Filial não encontrada");
					}
				}
			);
		}
	}

	onSubmit() {
		console.log(this.filialDto);
		//Chamada ao servidor para autenticar
		this.filialService.create(this.filialDto).subscribe(
			{
				next: data => {
					console.log(data);
					this.toastService.openSeccessSnackBar("Filial Cadastrada com sucesso");
					this.router.navigate(['/filiais/cadastro/', data.id]);
				}
			}
		)
	}

	onDelete() {
		if (this.idFilial != undefined) {
			//Delete
		}
	}

	testeGet() {
		console.log("Teste");
		this.filialService.teste().subscribe(
			{
				next: data => {
					console.log(data);
				}
			}
		)
	}
}
