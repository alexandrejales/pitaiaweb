import { EnderecoForm } from "./endereco-form";
import { PessoaForm } from "./pessoa-form";

export class LoginForm {
    email: string = '';
    senha: string = '';
    bloqueado: boolean = false;
    manterConectado: boolean = false;
    ultimoLogin: Date = new Date;
    tipo: string = '';
    dataCadastro: Date = new Date;
    dataDesativacao: Date = new Date;
    endereco: EnderecoForm = new EnderecoForm;
    pessoa: PessoaForm = new PessoaForm;
}