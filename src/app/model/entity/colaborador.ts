import { Empresa } from "./empresa";
import { Usuario } from "./usuario";

export class Colaborador {
    id: number = 0;
    bloqueado: boolean = false;
    empresa: Empresa = new Empresa();
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