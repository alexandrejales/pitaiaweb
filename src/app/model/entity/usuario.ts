import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class Usuario {
    id: number = 0;
    email: string = '';
    senha: string = '';
    bloqueado: boolean = false;
    manterConectado: boolean = false;
    ultimoLogin: Date = new Date;
    tipo: string = '';
    dataCadastro: Date = new Date;
    dataDesativacao: Date = new Date;
    endereco: Endereco = new Endereco;
    pessoa: Pessoa = new Pessoa;
}