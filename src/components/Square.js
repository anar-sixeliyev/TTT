import React from 'react';
import './styles/squareStyle.css'

/* const style = {
    background: 'whitesmoke',
    border: '2px solid darkblue',
    fontSize: '20px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
};*/

const Square = ({ value, onClick }) => ( 
    <button className = "square"
    onClick = { onClick } > { value } 
    </button>
)

export default Square