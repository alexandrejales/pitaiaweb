import { Endereco } from "./endereco";

export class Empresa {
    id: number = 0;
    bloqueado: string = '';
    cnpj: string = '';
    inscricaoEstadual: string = '';
    nomeFantasia: string = '';
    endereco: Endereco = new Endereco();
}