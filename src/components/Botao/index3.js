import React from 'react'
import '../../css/cronometro.css';
import '../../css/App.css';


const Botao = (props) => (
    <button class="btnCronometro content" onClick={props.onClick}>{props.label}</button>
)

export default Botao