import { Endereco } from "./endereco";

export class Empresa {
    id: number = 0;
    bloqueado: boolean = false;
    cnpj: string = '';
    inscricaoEstadual: string = '';
    nomeFantasia: string = '';
    endereco: Endereco = new Endereco();
}