import { Component, HostListener, OnInit } from '@angular/core';
import { FilialDto } from 'src/app/model/dto/filial-dto';
import { Constantes } from 'src/app/resource/contante';
import { FilialService } from 'src/app/service/filial.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
    selector: 'app-lista-filial',
    templateUrl: './lista-filial.component.html',
    styleUrls: ['./lista-filial.component.scss']
})
export class ListaFilialComponent implements OnInit {

    displayedColumns: string[] = [];
    columnsLarger: string[] = ['id', 'razaoSocial', 'bloqueado', 'cnpj', 'inscricaoEstadual', 'acao'];
    columnsSmall: string[] = ['id', 'razaoSocial', 'acao'];
    filiaisDtoList: FilialDto[] = [];
    index = 0;

    constructor(private filialService: FilialService, private toastService: ToastService) {
    }

    ngOnInit(): void {
        this.onScrennResize();
        this.onFindAll();
    }

    @HostListener('window:resize', ['$event'])
    onScrennResize(): void {
        if (window.innerWidth > 576) {
            this.displayedColumns = this.columnsLarger;
        } else {
            this.displayedColumns = this.columnsSmall;
        }
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
