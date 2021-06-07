import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilialDto } from 'src/app/model/dto/filial-dto';
import { InfoColaboradorForm } from 'src/app/model/form/info-colaborador-form';
import { UsuarioForm } from 'src/app/model/form/usuario-form';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { FilialService } from 'src/app/service/filial.service';
import { ToastService } from 'src/app/service/toast.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-colaborador-cadastro',
    templateUrl: './colaborador-cadastro.component.html',
    styleUrls: ['./colaborador-cadastro.component.scss']
})
export class ColaboradorCadastroComponent implements OnInit {

    infoColaboradorForm: InfoColaboradorForm = new InfoColaboradorForm();
    hide = true;
    idColaborador?: number;
    usuarios: UsuarioForm[] = [];
    filiais: FilialDto[] = [];

    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private filialService: FilialService,
        private toastService: ToastService,
        private colaboradorService: ColaboradorService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.idColaborador = this.activatedRoute.snapshot.params.idColaborador;

        if (!(this.idColaborador === undefined)) {
            this.onFindById(this.idColaborador);
        }

        this.usuarioService.findAll().subscribe(
            {
                next: data => {
                    this.usuarios = data;
                },
                error: erro => {
                    this.toastService.openAlertSnackBar('Não foi possivel carregar os usuários');
                }
            }
        );

        this.filialService.findAll().subscribe(
            {
                next: data => {
                    this.filiais = data;
                },
                error: erro => {
                    this.toastService.openAlertSnackBar('Não foi possivel carregar as filiais');
                }
            }
        );
    }

    onFindById(id: number): void {
        this.colaboradorService.findById(id).subscribe(
            {
                next: data => {
                    this.infoColaboradorForm = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar(error.error);
                    this.router.navigate(['/colaboradores']);
                }
            }
        );
    }

    onSave(): void {
        if (this.idColaborador === undefined) {
            this.onCreate();
        } else {
            this.onUpdate();
        }
    }

    onCreate(): void {
        this.colaboradorService.create(this.infoColaboradorForm).subscribe(
            {
                next: data => {
                    this.toastService.openSeccessSnackBar('Usuário cadastrado com sucesso');
                    this.router.navigate(['/colaboradores/cadastro/', data.id]);
                },
                error: error => {
                    this.toastService.openAlertSnackBar(error.error);
                }
            }
        );
    }

    onUpdate(): void {
        this.colaboradorService.update(this.infoColaboradorForm).subscribe(
            {
                next: data => {
                    this.toastService.openSeccessSnackBar('Usuário atualizado com sucesso');
                },
                error: error => {
                    this.toastService.openAlertSnackBar(error.error);
                }
            }
        );
    }

    onDelete(): void {
        if (this.idColaborador !== undefined) {
            this.colaboradorService.delete(this.idColaborador).subscribe(
                {
                    next: data => {
                        this.toastService.openSeccessSnackBar('Usuário deletado com sucesso');
                        this.router.navigate(['/colaboradores']);
                    },
                    error: error => {
                        this.toastService.openAlertSnackBar(error.error);
                    }
                }

            );
        }
    }
}
