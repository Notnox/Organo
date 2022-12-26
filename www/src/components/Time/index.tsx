import React from 'react';
import { IColaborador } from 'types/IColaborador';
import { ITime } from 'types/ITime';
import Card from './Card';
import styles from './Time.module.scss';

interface Props {
    time: ITime;
    colaboradores: IColaborador[];
    aoDeletar: (id: string) => void;
    mudarCorDoTime: (id: string, cor: string) => void;
    aoFavoritar: (id: string) => void;
}

const Time: React.FC<Props> = ({ time, colaboradores, aoDeletar, mudarCorDoTime, aoFavoritar }) => {
    return (
        <>
            {colaboradores?.length > 0 &&
                <section 
                    style={{backgroundColor: time.corSegundaria}} 
                    className={styles.time}
                >
                    <input 
                        value={time.corPrimaria} 
                        type='color' 
                        className={styles.time__inputColor} 
                        onChange={evento => mudarCorDoTime(time.id, evento.target.value)}
                    />
                    <h3 
                        style={{borderColor: time.corPrimaria}}
                        className={styles.time__titulo}
                    >
                        {time.nome}
                    </h3>
                    <div className={styles.time__colaboradores}>
                        {colaboradores?.map((colaborador, index) => {
                            return(
                                <React.Fragment key={index}>
                                    <Card 
                                        backgroundColor={time.corPrimaria}
                                        colaborador={colaborador}
                                        aoDeletar={aoDeletar}
                                        aoFavoritar={aoFavoritar}
                                        /> 
                                </ React.Fragment>
                            );                        
                        })}
                    </div>
                </section>
            }
        </>
    );
}

export default Time;