export interface IFormularioCadastro {
    nome: string;
    placeholder: string;
    required?: boolean;
    id: string;
}

interface CustomElements extends HTMLFormControlsCollection {
    nome: HTMLInputElement;
    cargo: HTMLInputElement;
    imagem: HTMLInputElement;
    time: HTMLSelectElement;
}

export interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}