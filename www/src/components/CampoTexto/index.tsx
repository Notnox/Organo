import styles from './CampoTexto.module.scss';

interface Props {
    nome: string;
    placeholder: string;
    required?: boolean;
    id: string;
}

const CampoTexto: React.FC<Props> = ({nome, placeholder, required, id}) => {
    return (
        <>
            <div className={styles.campoTexto}>
                <label className={styles.campoTexto__label}>{nome}</label>
                <input 
                    className={styles.campoTexto__input}
                    placeholder={placeholder}
                    required={required}
                    id={id}
                />
            </div>
        </>
    );
}

export default CampoTexto;