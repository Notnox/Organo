export interface IFormularioCadastro {
    nome: string;
    placeholder: string;
    required?: boolean;
    type: string;
    id: string;
}

interface CustomElements extends HTMLFormControlsCollection {
    nome: HTMLInputElement;
    cargo: HTMLInputElement;
    imagem: HTMLInputElement;
    listaSuspensa: HTMLSelectElement;
    cor: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}
