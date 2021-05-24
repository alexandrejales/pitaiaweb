import { Filial } from "./filial";
import { Usuario } from "./usuario";

export class Colaborador {
    id: number = 0;
    bloqueado: boolean = false;
    empresa: Filial = new Filial();
    usuario: Usuario = new Usuario();
    cargo: string = '';
    setor: string = '';
    ramal: string = '';
    dataAdmissao: Date = new Date();
    dataDemissao: Date = new Date();
    dataNascimento: Date = new Date();
    cpf: string = '';
    rg: string = '';
    pis_pasep: string = '';
    ctps: string = '';
    seria: string = '';
}