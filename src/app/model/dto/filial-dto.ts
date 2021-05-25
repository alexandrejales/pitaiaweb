import { FilialForm } from "../form/cadastro-filial-form";
import { EnderecoForm } from "../form/endereco-form";

export class FilialDto {
    filialForm: FilialForm = new FilialForm;
    enderecoForm: EnderecoForm = new EnderecoForm;
}