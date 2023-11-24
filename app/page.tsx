'use client';
import { useState } from 'react';

export default function Board() {

  const [xIsNext,setXIsNext] = useState(true)
  const[square,setSquare]=useState(Array(9).fill("."))

  function handleClick(i:number){

    if(square[i]!=".")
      return

    const nextSquare = square.slice();
    if(xIsNext)
      nextSquare[i] ="X"
    else
      nextSquare[i] = "O"
    
    setSquare(nextSquare);
    setXIsNext(!xIsNext)
  }
  
  return (
    <div className='container m-2'>
      <div className='row'>
        <Square value={square[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={square[3]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className='row'>
        <Square value={square[4]} onSquareClick={()=>handleClick(3)}/>
        <Square value={square[5]} onSquareClick={()=>handleClick(4)}/>
        <Square value={square[6]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className='row'>
        <Square value={square[7]} onSquareClick={()=>handleClick(6)}/>
        <Square value={square[8]} onSquareClick={()=>handleClick(7)}/>
        <Square value={square[9]} onSquareClick={()=>handleClick(8)}/>
        
      </div>
    </div>
    
  )
  interface SquareProps{
    value:string,
    onSquareClick:any
  }  

  function Square({value , onSquareClick}:SquareProps){

    return <div  onClick={onSquareClick} className='col-3 col-md-2 p-3 border 
    fs-1 fw-bold text-center'>{value}</div>
  }
}
function calcularWinner(squares){
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}
