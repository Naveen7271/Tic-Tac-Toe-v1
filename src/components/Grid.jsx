import React from 'react'
import css from './Grid.module.css'
import Button from './Button'
import { useState } from 'react'
const Grid = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [buttons, setButtons] = useState(Array(9).fill(null))

    function handelOnClick(i) {
        if (buttons[i] || calculateWinner(buttons)) {
            return
        }

        const nextButtons = buttons.slice();
        if (xIsNext) {
            nextButtons[i] = 'X';
        }
        else {
            nextButtons[i] = 'O';
        }

        setButtons(nextButtons)
        setXIsNext(!xIsNext)
    }
    const winner = calculateWinner(buttons)
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>

            <div className={css.status}><h1>{status}</h1></div>
            <div className={css.grid}>
                <Button value={buttons[0]} onButtonClick={() => handelOnClick(0)} />
                <Button value={buttons[1]} onButtonClick={() => handelOnClick(1)} />
                <Button value={buttons[2]} onButtonClick={() => handelOnClick(2)} />
            </div>
            <div className={css.grid}>
                <Button value={buttons[3]} onButtonClick={() => handelOnClick(3)} />
                <Button value={buttons[4]} onButtonClick={() => handelOnClick(4)} />
                <Button value={buttons[5]} onButtonClick={() => handelOnClick(5)} />
            </div>
            <div className={css.grid}>
                <Button value={buttons[6]} onButtonClick={() => handelOnClick(6)} />
                <Button value={buttons[7]} onButtonClick={() => handelOnClick(7)} />
                <Button value={buttons[8]} onButtonClick={() => handelOnClick(8)} />
            </div>
            <div>
                <h1><button
                    onClick={() => setButtons(Array(9).fill(null))}
                >Reset the game</button></h1></div>

        </>
    )
}


function calculateWinner(buttons) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
            return buttons[a];
        }
    }
    return null;
}




export default Grid