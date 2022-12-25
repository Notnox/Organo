import Botao from 'components/Botao';
import CampoTexto from 'components/CampoTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import { formularioCadastro } from 'data/FormularioCadastro';
import { times } from 'data/Times';
import { FormEvent } from 'react';
import { IColaborador } from 'types/IColaborador';
import { CustomForm } from 'types/IFormularioCadastro';
import styles from './Formulario.module.scss';

interface Props {
    cadastraColaborador: (colaborador: IColaborador) => void;
}

const Formulario: React.FC<Props> = ({ cadastraColaborador }) => {
    const cadastrarColaborador = (evento: FormEvent<CustomForm>) => {
        evento.preventDefault();
        const target = evento.currentTarget.elements;
        const colaborador: IColaborador = {
            nome: target.nome.value,
            cargo: target.cargo.value,
            imagem: target.imagem.value,
            time: target.time.value
        };
        cadastraColaborador(colaborador);
        target.nome.value = '';
        target.cargo.value = '';
        target.imagem.value = '';
        target.time.value = 'Selecione seu time';
        alert('Colaborador cadastrado com sucesso!');
    }
    return (
        <section className={styles.formulario}>
            <form 
                className={styles.formulario__form}
                onSubmit={cadastrarColaborador}
            >
                <h2>Preencha os dados para criar o card colaborador.</h2>
                {formularioCadastro.map((item, index) => (
                    <CampoTexto 
                        key={index}
                        id={item.id}
                        nome={item.nome} 
                        placeholder={item.placeholder}
                        required={item.required}
                    />
                ))}
                <ListaSuspensa 
                    id='time'
                    label='Time' 
                    lista={times.map(time => time.nome)}
                    required={true}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;