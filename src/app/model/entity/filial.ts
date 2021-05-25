import { Endereco } from "./endereco";

export class Filial {
    id: number = 0;
    bloqueado: boolean = false;
    cnpj: string = '';
    inscricaoEstadual: string = '';
    razaoSocial: string = '';
    endereco: Endereco = new Endereco();
}