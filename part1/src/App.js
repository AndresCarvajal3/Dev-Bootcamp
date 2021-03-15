
import './App.css';
import Mensaje from './Mensaje.js';



const Descripcion = () => {

   return (<p> Prueba de funcionamiento de funciones.</p> )
}

const App = () => {
  

  return (
    <div className="App">
    
   <Mensaje color='red' message='Este es un nuevo mensaje'/>
   <Mensaje color = 'yellow' message =  'Que nos ayudara en el'/>
   <Mensaje color = 'blue' message = 'Curso de Reac'/>
    <Descripcion></Descripcion>
    
    </div>
  );
}

export default App;
