import { IFormularioCadastro } from "types/IFormularioCadastro";

export const FormularioColaborador: IFormularioCadastro[] = [
    {
        'nome': 'Nome',
        'placeholder': 'Digite seu nome',
        'required': true,
        'id': 'nome',
        'type': 'text'
    }, {
        'nome': 'Cargo',
        'placeholder': 'Digite seu cargo',
        'required': true,
        'id': 'cargo',
        'type': 'text'
    }, {
        'nome': 'Imagem',
        'placeholder': 'Digite o endereço da imagem',
        'required': true,
        'id': 'imagem',
        'type': 'text'
    }
];

export const FormularioTime: IFormularioCadastro[] = [
    {
        'nome': 'Nome',
        'placeholder': 'Digite o nome',
        'required': true,
        'id': 'nome',
        'type': 'text'
    }, {
        'nome': 'Cor',
        'placeholder': '',
        'required': true,
        'id': 'cor',
        'type': 'color'
    }
];