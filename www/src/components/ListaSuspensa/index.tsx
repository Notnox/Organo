import styles from './ListaSuspensa.module.scss';

interface Props {
    label: string;
    lista: string[];
    required?: boolean;
    id: string;
}

const ListaSuspensa: React.FC<Props> = ({label, lista, required, id}) => {
    return (
        <div className={styles.listaSuspensa}>
            <label className={styles.listaSuspensa__label}>{label}</label>
            <select 
                id={id}
                className={styles.listaSuspensa__select}
                required={required}
            >
                <option>Selecione seu time</option>
                {lista?.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;