import { Component, OnInit } from '@angular/core';
import { FilialDto } from 'src/app/model/dto/filial-dto';
import { FilialService } from 'src/app/service/filial.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
    selector: 'app-lista-filial',
    templateUrl: './lista-filial.component.html',
    styleUrls: ['./lista-filial.component.scss']
})
export class ListaFilialComponent implements OnInit {

    displayedColumns: string[] = ['id', 'razaoSocial', 'bloqueado', 'cnpj', 'inscricaoEstadual', 'acao'];
    filiaisDtoList: FilialDto[] = [];
    index = 0;

    constructor(private filialService: FilialService, private toastService: ToastService) {
    }

    ngOnInit(): void {
        this.onFindAll();
    }

    onFindAll(): void {
        this.filialService.findAll().subscribe(
            {
                next: data => {
                    this.filiaisDtoList = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar('Erro ao carregar os dados');
                }
            }
        );
    }
}
