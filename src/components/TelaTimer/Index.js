import React, { Component } from 'react';
import Botao from '../Botao/index'
import Temporizador from './index2'
import { Link } from 'react-router-dom'

class Timer extends Component{
    render(){
        return(
            <form onSubmit={Temporizador.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputCity">Horas</label>
                        <input type="text" value={Temporizador.horas} onChange={Temporizador.handleHorasChange} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputState">Minutos</label>
                        <input type="text" value={Temporizador.minutos} onChange={Temporizador.handleMinutosChange} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputZip">Segundos</label>
                        <input type="text" value={Temporizador.segundos} onChange={Temporizador.handleSegundosChange} className="form-control" />
                    </div>
                </div>
                <input type="submit" value="Contar"><Link to="/Temporizador"></Link></input>
            </form>
        )
    }
}

export default Timer;