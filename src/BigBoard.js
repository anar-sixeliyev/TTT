import React from 'react'
import Board from './components/Board';
import Game from './components/Game'

const BigBoard = () => {
    const [Bigboard, setBigboard] = useState(Array(9).fill(null));
    const [boardIsNext, setBoardisNext] = useState(true);
    const winner = calculateWinner(Bigboard);

    return(
        <div>
            <Game />
        </div>
    )

}