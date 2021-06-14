import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioForm } from 'src/app/model/form/usuario-form';
import { ToastService } from 'src/app/service/toast.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-listar-usuario',
    templateUrl: './listar-usuario.component.html',
    styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = [];
    columnsLarger: string[] = ['item', 'nome', 'email', 'tipo', 'bloqueado', 'acao'];
    columnsSmall: string[] = ['item', 'nome', 'acao'];

    dataSource = new MatTableDataSource<UsuarioForm>();
    @ViewChild(MatPaginator) paginator?: MatPaginator;

    index = 0;

    constructor(private usuarioService: UsuarioService, private toastService: ToastService) { }

    ngOnInit(): void {
        this.onScrennResize();
        this.onFindAll();
    }

    ngAfterViewInit(): void {
        if (this.paginator !== undefined) {
            this.dataSource.paginator = this.paginator;
        }
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
        this.usuarioService.findAll().subscribe(
            {
                next: data => {
                    this.dataSource.data = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar('Erro ao carregar os dados');
                }
            }
        );
    }
}
