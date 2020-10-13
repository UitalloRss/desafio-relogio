import React, {Component} from 'react';
import Time from '../components/Time/index';
import Moment from 'react-moment';
import Clock from 'react-live-clock';
import './pages.css';

class Relogio extends Component{
    render(){
        return(
            <div className="telaRelogio">
                <h4>Horário de Brasília <Time></Time></h4>
                <div>
                    <h5>Outros Fuso-Horários</h5>
                    <div className="fusoHorario">
                        <p>Los Angeles</p>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Los_Angeles'} />
                    </div>
                    <div className="fusoHorario">
                        <p>Paris</p>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
                    </div>
                    <div className="fusoHorario">
                        <p>Tóquio</p>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
                    </div>
                    <div className="fusoHorario">
                        <p>Sydney</p>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Sydney'} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Relogio;



