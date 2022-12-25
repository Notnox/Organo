import React from 'react';
import { IColaborador } from 'types/IColaborador';
import { ITime } from 'types/ITime';
import Card from './Card';
import styles from './Time.module.scss';

interface Props {
    time: ITime;
    colaboradores: IColaborador[];
}

const Time: React.FC<Props> = ({ time, colaboradores }) => {
    return (
        <>
            {colaboradores?.length > 0 &&
                <section 
                    style={{backgroundColor: time.corSegundaria}} 
                    className={styles.time}
                >
                <h3 
                    style={{borderColor: time.corPrimaria}}
                    className={styles.time__titulo}
                >
                    {time.nome}
                </h3>
                <div className={styles.time__colaboradores}>
                    {colaboradores?.map((colaborador, index) => (
                        <Card 
                            backgroundColor={time.corPrimaria}
                            key={index}
                            colaborador={colaborador}
                        /> 
                    ))}
                </div>
            </section>
            }
        </>
    );
}

export default Time;