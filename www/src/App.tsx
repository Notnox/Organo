import Banner from 'components/Banner';
import Formulario from 'components/Formulario';
import RodaPe from 'components/RodaPe';
import Time from 'components/Time';
import { times } from 'data/Times';
import hexToRgba from 'hex-to-rgba';
import { FormEvent, useState } from 'react';
import { IColaborador } from 'types/IColaborador';
import { CustomForm } from 'types/IFormularioCadastro';
import { v4 as uuidv4 } from 'uuid';
import { ITime } from 'types/ITime';
import { FormularioColaborador, FormularioTime } from 'data/FormularioCadastro';
import styles from './App.module.scss';

function App() {
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [listaTimes, setListaTime] = useState<ITime[]>(times);

  const cadastrarColaborador = (evento: FormEvent<CustomForm>) => {
    evento.preventDefault();
    const target = evento.currentTarget.elements;
    const colaborador: IColaborador = {
        id: uuidv4(),
        nome: target.nome.value,
        cargo: target.cargo.value,
        imagem: target.imagem.value,
        time: target.listaSuspensa.value,
        favorito: false
    };
    target.nome.value = '';
    target.cargo.value = '';
    target.imagem.value = '';
    target.listaSuspensa.value = 'Selecione seu time';
    setColaboradores([...colaboradores, colaborador]);
  }

  const cadastrarTime = (evento: FormEvent<CustomForm>) => {
    evento.preventDefault();
    const target = evento.currentTarget.elements;
    const time: ITime = {
        id: uuidv4(),
        nome: target.nome.value,
        corPrimaria: target.cor.value,
        corSegundaria: hexToRgba(target.cor.value, '0.6')
    };
    target.nome.value = '';
    target.cor.value = '';
    setListaTime([...listaTimes, time]);
  }

  const deletarColaborador = (id: string) => {
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const mudarCorDoTime = (idTime: string, cor: string) => {
    setListaTime(listaTimes.map(time => {
      if (time.id === idTime) {
        time.corPrimaria = cor;
        time.corSegundaria = hexToRgba(cor, '0.6');
      }
      return time;
    }))
  }

  const resolverFavoritoColaborador = (id: string) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }))
  }

  return (
    <>
      <Banner />
      <div className={styles.formularios}>
        <Formulario 
          titulo='Preencha os dados para criar o card colaborador.'
          aoCadastrar={cadastrarColaborador!}
          formulario={FormularioColaborador}
          textoBotao='Criar card'
          listaSuspensa={listaTimes}
          tituloListaSuspensa='Time'
          />
        <Formulario 
          titulo='Preencha os dados para criar o time.'
          aoCadastrar={cadastrarTime!}
          formulario={FormularioTime}
          textoBotao='Criar time'
          />
      </div>
      {colaboradores?.length > 0 && 
        <div className={styles.organizacao}>
          <h2 className={styles.organizacao__titulo}>Minha organização</h2>
        </div>
      }
      {listaTimes.map(time => (
        <Time
          key={time.id}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCorDoTime={mudarCorDoTime}
          aoFavoritar={resolverFavoritoColaborador}
        />
      ))}
      <RodaPe />
    </>
  );
}

export default App;
