import { IColaborador } from 'types/IColaborador';
import styles from './Card.module.scss';

interface Props {
    colaborador: IColaborador;
    backgroundColor: string;
}

const Card: React.FC<Props> = ({ colaborador, backgroundColor }) => {
    return (
        <div className={styles.colaborador}>
            <div 
                style={{backgroundColor: backgroundColor}}
                className={styles.colaborador__cabecalho}
            >
                <img 
                    className={styles.colaborador__cabecalho__imagem}
                    src={colaborador.imagem} 
                    alt={colaborador.nome}
                />
            </div>
            <div className={styles.colaborador__rodaPe}>
                <h4 className={styles.colaborador__rodaPe__h4}>{colaborador.nome}</h4>
                <h5 className={styles.colaborador__rodaPe__h5}>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

export default Card;