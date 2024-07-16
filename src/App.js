import {useState} from "react";

function Square({value, onSquareClick}) {
    return <button className="square" onClick={onSquareClick}>
        {value}
    </button>
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        // Set state again will re-render components and child components  that using state
        setSquares(nextSquares);

        // onSquareClick={handleClick(0)}/> will infinite loop, because it is a call function, function
        // is executed -> change state 0 -> re-rendering component -> call handleClick(0) again, so on
        // -> to fix this, use callback function

        // Parent component pass props to child component
        // Parent component handle state

        // Now that your state handling is in the Board component,
        // the parent Board component passes props to the child Square components so that they can be displayed correctly.
        // When clicking on a Square, the child Square component now asks the parent Board component to update the state of the board.
        // When the Board’s state changes, both the Board component and every child Square re-renders automatically.
        // Keeping the state of all squares in the Board component will allow it to determine the winner in the future.

        // For convention, use onSomething for props represent events and handleSomething for handle those events

        // Immutability make complex features to easier implement, ex undo / redo function, should mutate state directly
        //, make to compare data change or not easier for performance reasons
    }

    return (
        <>
            <div className="board-row">

                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}
