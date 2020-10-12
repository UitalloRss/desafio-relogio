import React, {Component} from 'react';
import Time from '../components/Time/index';
import './pages.css';

class Relogio extends Component{
    render(){
        return(
            <div>
                <h4>Horário de Brasília <Time></Time></h4>
                

                <h5>Outros Fuso-Horários</h5>
                <Time></Time>
            </div>
        );
    }
}
export default Relogio;



