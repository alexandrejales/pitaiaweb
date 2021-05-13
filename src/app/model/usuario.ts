import { Endereco } from "./endereco";

export class Usuario {
    id: number = 0;
    nome: string = '';
    email: string = '';
    senha: string = '';
    bloqueado: boolean = false;
    manterConectado: boolean = false;
    dataUltimoAcesso: Date = new Date();
    tipoUsuario: string = '';
    endereco: Endereco = new Endereco();
}