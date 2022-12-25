import Banner from 'components/Banner';
import Formulario from 'components/Formulario';
import RodaPe from 'components/RodaPe';
import Time from 'components/Time';
import { times } from 'data/Times';
import { useState } from 'react';
import { IColaborador } from 'types/IColaborador';

function App() {
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  const cadastraColaborador = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <>
      <Banner />
      <Formulario 
        cadastraColaborador={cadastraColaborador}
      />
      {times.map(time => (
        <Time
          key={time.id}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <RodaPe />
    </>
  );
}

export default App;
