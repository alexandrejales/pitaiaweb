import { Component, HostListener, OnInit } from '@angular/core';
import { RootComponent } from 'src/app/layout/root/root.component';
import { ColaboradorListarDto } from 'src/app/model/dto/colaborador-listar-dto';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
    selector: 'app-colaborador-listar',
    templateUrl: './colaborador-listar.component.html',
    styleUrls: ['./colaborador-listar.component.scss']
})
export class ColaboradorListarComponent implements OnInit {

    displayedColumns: string[] = [];
    columnsLarger: string[] = ['item', 'cpf', 'nome', 'filial', 'cargo', 'bloqueado', 'acao'];
    columnsSmall: string[] = ['item', 'nome', 'acao'];
    colaboradorListarDto: ColaboradorListarDto[] = [];
    index = 0;

    constructor(private colaboradorService: ColaboradorService, private toastService: ToastService) { }

    ngOnInit(): void {
        this.onFindAll();
        this.onScrennResize();
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
        this.colaboradorService.findAll().subscribe(
            {
                next: data => {
                    this.colaboradorListarDto = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar('Erro ao carregar os dados');
                }
            }
        );
    }
}
