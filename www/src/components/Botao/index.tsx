import styles from './Botao.module.scss';

interface Props {
    children: React.ReactNode;
}

const Botao: React.FC<Props> = ({ children }) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    );
}

export default Botao;