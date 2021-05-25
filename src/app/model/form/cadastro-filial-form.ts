import { EnderecoForm } from "./endereco-form";

export class FilialForm {
    id?: number;
    bloqueado: boolean = false;
    cnpj?: string = '';
    inscricaoEstadual?: string = '';
    razaoSocial?: string = '';
}