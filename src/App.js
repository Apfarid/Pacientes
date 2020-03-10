import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

const App = () => {

  let agendaInicial = JSON.parse(localStorage.getItem('agenda'))
  if(!agendaInicial){
    agendaInicial = []
  }

  const [agenda, setAgenda] = useState(agendaInicial);

  useEffect( () => {
    if(agendaInicial){
      localStorage.setItem('agenda', JSON.stringify(agenda))
    }else{
      localStorage.setItem('agenda', JSON.stringify([]))
    }
  },[agenda])







  //funcion que toma las citas actuales y agrega la nueva

  const crearCita = cita => {
    setAgenda([
      ...agenda,
      cita
    ])    
  }

  const actualizar = id => {
    const nueva = agenda.filter( cita => cita.id !== id)
    setAgenda(nueva);          
  }

  const titulo = agenda.length === 0 ? 'No hay citas' : 'Administra tus citas'

  

  return (
    <div>
     <h1>Administrador de pacientes</h1>

     <div className="container">
       <div className="row">
         <div className="one-half column">
           <h1>Crear Cita</h1>
           <Formulario
            crearCita = {crearCita}
           />
         </div>
         <div className="one-half column">
            <h2>{titulo}</h2>
            {agenda.map(cita => (
              <Cita
                key={cita.id}
                cita = {cita}
                actualizar = {actualizar}
              />
            ))}
         </div>
       </div>
     </div>
    </div>
  );
};

export default App;