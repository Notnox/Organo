import { IColaborador } from 'types/IColaborador';
import styles from './Card.module.scss';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
    colaborador: IColaborador;
    backgroundColor: string;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Card: React.FC<Props> = ({ colaborador, backgroundColor, aoDeletar, aoFavoritar }) => {

    const favoritar =() => {
        aoFavoritar(colaborador.id);
    }

    return (
        <div className={styles.colaborador}>
            <AiFillCloseCircle 
                size={25}
                className={styles.colaborador__deletar}
                onClick={() => aoDeletar(colaborador.id)}
            />
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
                <div className={styles.colaborador__favorito}>
                    {colaborador.favorito 
                    ? <AiFillHeart size={25} onClick={favoritar} style={{color: '#FF0000'}}/> 
                    : <AiOutlineHeart size={25} onClick={favoritar}/>}
                </div>
            </div>
        </div>
    );
}

export default Card;