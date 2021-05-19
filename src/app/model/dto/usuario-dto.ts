export class UsuarioDto {
    id: number = 0;
    nome: string = '';
    email: string = '';
    bloqueado: boolean = false;
    manterConectado: boolean = false;
    ultimoLogin: Date = new Date();
    tipo: string = '';
    dataCadastro: Date = new Date();
}