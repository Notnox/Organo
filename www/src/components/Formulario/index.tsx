import Botao from 'components/Botao';
import CampoTexto from 'components/CampoTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import { FormEvent } from 'react';
import styles from './Formulario.module.scss';
import { CustomForm, IFormularioCadastro } from 'types/IFormularioCadastro';
import { ITime } from 'types/ITime';

interface Props {
    aoCadastrar: (evento: FormEvent<CustomForm>) => void;
    formulario: IFormularioCadastro[];
    titulo: string;
    listaSuspensa?: ITime[];
    textoBotao: string;
    tituloListaSuspensa?: string;
}

const Formulario: React.FC<Props> = 
    ({ aoCadastrar, formulario, titulo, listaSuspensa, textoBotao, tituloListaSuspensa }) => {
    return (
        <section className={styles.formulario}>
            <form 
                className={styles.formulario__form}
                onSubmit={aoCadastrar}
            >
                <h2>{titulo}</h2>
                {formulario.map((item, index) => (
                    <CampoTexto 
                        key={index}
                        id={item.id}
                        nome={item.nome} 
                        placeholder={item.placeholder}
                        required={item.required}
                        tipo={item.type}
                    />
                ))}
                { listaSuspensa &&
                    <ListaSuspensa 
                        id='listaSuspensa'
                        label={tituloListaSuspensa ? tituloListaSuspensa : ''}
                        lista={listaSuspensa.map(time => time.nome)}
                        required={true}
                    />
                }
                <Botao>
                    {textoBotao}
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;