import { IFormularioCadastro } from "types/IFormularioCadastro";

export const formularioCadastro: IFormularioCadastro[] = [
    {
        'nome': 'Nome',
        'placeholder': 'Digite seu nome',
        'required': true,
        'id': 'nome'
    }, {
        'nome': 'Cargo',
        'placeholder': 'Digite seu cargo',
        'required': true,
        'id': 'cargo'
    }, {
        'nome': 'Imagem',
        'placeholder': 'Digite o endereço da imagem',
        'required': true,
        'id': 'imagem'
    }
];