import React from 'react'
import Square from './Square';
import './styles/boardStyle.css'

/* const style = {
    width: '150px',
    height: '150px',
    border: '4px solid red',
    borderRadius: '10px',
    display: 'grid',
    gridTemplate: 'repeat(3,1fr) / repeat(3,1fr)',
} */
const styleChild = {
    width: '150px',
    height: '150px',
    /* margin: '0 auto', */
    /* border: '4px solid red',
    borderRadius: '10px', */
    display: 'grid',
    gridTemplate: 'repeat(3,1fr) / repeat(3,1fr)',
}

const Board = ({ squares, onClick,next }) => {
    return (
        <div style={styleChild}>
            {squares.map((row, rowIndex) => (                
                <div key={rowIndex} style={rowIndex===next ? {filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.9))'} : {background: 'white'} } className="board" >
                    {
                        row.map((column, columnIndex) => (
                            <Square key={columnIndex} value={column} onClick={() => onClick(rowIndex, columnIndex)} />
                        ))
                    }
                </div>
            ))}
        </div>
    )
}
export default Board;