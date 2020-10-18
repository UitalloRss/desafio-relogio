import React, { Component } from 'react';
import './style.css';
import Botao from '../Botao/index3'


class Temporizador extends Component{
    constructor(props){
        super(props)
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: undefined
        };
    }

    handleHorasChange = (event) =>{
        if (this.horas !== 0){
            this.setState({
                horas: event.target.value
            })
        }
    }

    handleMinutosChange = (event) =>{
        if(this.minutos !== 0){
            this.setState({
                minutos: event.target.value
            })
        }
    }

    handleSegundosChange = (event) =>{
        if(this.segundos !== 0){
            this.setState({
                segundos: event.target.value
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
    }

    componentDidMount(){
         this.myInterval = setInterval(() =>{
            const {horas, minutos, segundos} = this.state;

            if(horas !== 0 && minutos === 0 && segundos === 0){
                this.setState(({horas}) => ({
                    horas: horas - 1,
                    minutos: 59,
                    segundos: 59
                }))
            }

            if (minutos <= 59){
                if(segundos > 0 && segundos <= 59){
                    this.setState(({segundos}) =>({
                        segundos: segundos - 1
                    }))
                }

                if (minutos !== 0 && segundos === 0){
                    this.setState(({minutos}) => ({
                        minutos: minutos -1,
                        segundos: 59
                    }))
                }
            }
         }, 1000)
     }

     componentWillUnmount(){
        clearInterval(this.myInterval);
     }

    render(){
        const { horas, minutos, segundos } = this.state

        var msg;
        if(horas === undefined || minutos === undefined || segundos === undefined){
            msg = ""
        }else if(horas === 0 && minutos === 0 && segundos === 0){
            msg = <h2 className="msgTimer">Fim da Contagem</h2>
        }else{
            msg = <h3 className="msgTimer">Tempo restante: {horas < 10? `0${horas}`: horas}:{minutos < 10? `0${minutos}`: minutos}:{segundos < 10? `0${segundos}`: segundos}</h3>
        }
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputCity">Horas</label>
                        <input type="number" min="0" value={this.state.horas} onChange={this.handleHorasChange} className="form-control" placeholder="0" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputState">Minutos</label>
                        <input type="number" maxLength="2" min="0" max="59" value={this.state.minutos} onChange={this.handleMinutosChange} className="form-control" placeholder="0"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputZip">Segundos</label>
                        <input type="number" maxLength="2" max="59" min="0" value={this.state.segundos} onChange={this.handleSegundosChange} className="form-control" placeholder="0"/>
                    </div>
                </div>
            </form>
            <div>
                {msg}
            </div>            
        </>
        )
    }
}

export default Temporizador;