import React from 'react';
import '../../css/bootstrap.css';
import './botao.css'

function Botao(props){
    return(
        <button type="button" class="btn btn-secondary">{props.children}</button>
    )
}

export default Botao;