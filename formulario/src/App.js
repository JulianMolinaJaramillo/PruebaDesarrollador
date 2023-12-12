import React, {Component} from 'react';
import './App.css';


class App extends Component{
  //Solo para registrar la informacion en un estado y saber que ingresa
  state = {Nombre:'' , Telefono:'',Movil:'', Email:'', Bodega: '', Oficina:''};
  
  //valueToState Metodo para cambiar el estado
  valueToState = ({ name, value}) => {
    this.setState(() => {
      return { [name]: value};
    });
  };


  render(){
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
        <h1> Formulario React JS</h1>
        <label htmlFor="nombre">Nombre</label>
        <input name="Nombre" type="text" placeholder="Ingresa tu nombre" onChange={event => this.valueToState(event.target)}/>
        <br></br>
        <label htmlFor="telefono">Telefono</label>
        <input name="Telefono" type="text" placeholder="Ingresa numero fijo" onChange={event => this.valueToState(event.target)}/>
        <br></br>
        <label htmlFor="movil">Telefono Movil</label>
        <input name="Movil" type="text" placeholder="Ingresa numero movil" onChange={event => this.valueToState(event.target)}/>
        <br></br>
        <label htmlFor="email">Correo</label>
        <input name="Email" type="email" placeholder="ejemplo@hotmail.com" onChange={event => this.valueToState(event.target)}/>
        <br></br>
        <label htmlFor="color">Bodega</label>
          <select
            name="Bodega" 
            onChange={event => this.valueToState(event.target)}
          >
            <option value={""}>- selecciona uno -</option>
            <option value={"medellin"}>Medellín</option>
            <option value={"cali"}>Cali</option>
          </select>

        <label htmlFor="color">Oficina</label>
          <select
            name="Oficina" 
            onChange={event => this.valueToState(event.target)}
          >
            <option value={""}>- selecciona uno -</option>
            <option value={"M3390"}>M3390</option>
            <option value={"M1425"}>M1425</option>
            <option value={"C4490"}>C4490</option>
            <option value={"C1222"}>C1222</option>
           
          </select>
          

        </form>
      </div>
    );
  }
}

export default App;
