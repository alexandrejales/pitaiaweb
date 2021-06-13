import { Component, HostListener, OnInit } from '@angular/core';
import { DispositivoForm } from 'src/app/model/form/dispositivo-form';
import { DispositivoService } from 'src/app/service/dispositivo.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
    selector: 'app-dispositivo-listar',
    templateUrl: './dispositivo-listar.component.html',
    styleUrls: ['./dispositivo-listar.component.scss']
})
export class DispositivoListarComponent implements OnInit {

    displayedColumns: string[] = [];
    columnsLarger: string[] = ['item', 'nome', 'filialRazaoSocial', 'dataExpiracao', 'bloqueado', 'acao'];
    columnsSmall: string[] = ['item', 'nome', 'acao'];
    dados: DispositivoForm[] = [];
    index = 0;

    constructor(private dispositivoService: DispositivoService, private toastService: ToastService) { }

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
        this.dispositivoService.findAll().subscribe(
            {
                next: data => {
                    this.dados = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar('Erro ao carregar os dados');
                }
            }
        );
    }
}
