import { Pessoa } from "./pessoa";

export class Usuario {
    id: number = 0;
    pessoa: Pessoa = new Pessoa();
    nome: string = '';
    email: string = '';
    senha: string = '';
    bloqueado: boolean = false;
    manterConectado: boolean = false;
    ultimoLogin: Date = new Date();
    tipo: string = '';
    dataCadastro: Date = new Date();
    dataDesativacao: Date = new Date();
}