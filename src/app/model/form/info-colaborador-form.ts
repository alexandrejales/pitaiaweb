export class InfoColaboradorForm {
    id?: number;
    bloqueado: boolean = false;
    filialId?: number;
    usuarioId?: number;
    cargo: string = '';
    setor: string = '';
    ramal: string = '';
    pisPasep: string = '';
    ctps: string = '';
    serie: string = '';
    dataAdmissao?: Date;
    dataDemissao?: Date;
    contaId?: number;
}