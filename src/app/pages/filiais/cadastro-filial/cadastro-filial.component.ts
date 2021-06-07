import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/service/toast.service';
import { FilialService } from 'src/app/service/filial.service';
import { FilialDto } from 'src/app/model/dto/filial-dto';
import { RootComponent } from 'src/app/layout/root/root.component';

@Component({
    selector: 'app-cadastro-filial',
    templateUrl: './cadastro-filial.component.html',
    styleUrls: ['./cadastro-filial.component.scss']
})
export class CadastroFilialComponent implements OnInit {
    filialDto = new FilialDto();
    idFilial?: number;

    constructor(
        private router: Router,
        private toastService: ToastService,
        private filialService: FilialService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.idFilial = this.activatedRoute.snapshot.params.idFilial;

        if (!(this.idFilial === undefined)) {
            this.onFindById(this.idFilial);
        }
    }

    onFindById(id: number): void {
        this.filialService.findById(id).subscribe(
            {
                next: data => {
                    this.filialDto = data;
                },
                error: error => {
                    // Imprime erro da exception da API
                    this.toastService.openAlertSnackBar(error.error);
                    this.router.navigate(['/filiais']);
                }
            }
        );
    }

    onSave(): void {
        if (this.idFilial === undefined) {
            this.onCreate();
        } else {
            this.onUpdate();
        }
    }
    onCreate(): void {
        RootComponent.showProgress();
        this.filialService.create(this.filialDto).subscribe(
            {
                next: data => {
                    this.toastService.openSeccessSnackBar('Filial cadastrada com sucesso');
                    this.router.navigate(['/filiais/cadastro/', data.id]);
                    RootComponent.hiddenProgress();
                },
                error: message => {
                    if (String(message).length > 0) {
                        this.toastService.openAlertSnackBar(message);
                    }
                    RootComponent.hiddenProgress();
                }
            }
        );
    }

    onUpdate(): void {
        RootComponent.showProgress();
        this.filialService.update(this.filialDto).subscribe(
            {
                next: data => {
                    RootComponent.hiddenProgress();
                    this.toastService.openSeccessSnackBar('Filial atualizada com sucesso');
                },
                error: message => {
                    if (String(message).length > 0) {
                        this.toastService.openAlertSnackBar(message);
                    }
                    RootComponent.hiddenProgress();
                }
            }
        );
    }

    onDelete(): void {
        if (this.idFilial !== undefined) {
            RootComponent.showProgress();
            this.filialService.delete(this.idFilial).subscribe(
                {
                    next: data => {
                        RootComponent.hiddenProgress();
                        this.toastService.openSeccessSnackBar('Filial deletada com sucesso');
                        this.router.navigate(['/filiais']);
                    },
                    error: message => {
                        if (String(message).length > 0) {
                            this.toastService.openAlertSnackBar(message);
                        }
                        RootComponent.hiddenProgress();
                    }
                }

            );
        }
    }
}
