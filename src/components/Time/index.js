import React from 'react';
import Moment from 'react-moment';
import Clock from 'react-live-clock';
import './index.css';

function Time(){
    return(
        <div className="time">
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Sao_Paulo'} />
        </div>
    );
}

export default Time;