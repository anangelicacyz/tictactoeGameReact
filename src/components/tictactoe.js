import { useState } from 'react'

function Cuadro ({value, onSquareClick}){
    return (
        <div style={(value=== 'X')? {color: '#5ecbff'}:{color: '#7ade59'}} onClick={onSquareClick}>{value}</div>
    )
}

function TictactoeGame () {
    const [turno, setSigTurno] = useState(true)
    const [array, setArray] = useState((Array(9).fill(null)))
    //copia del array 
    const [nextSquares, setNextSquares] = useState(array.slice())

    function handleClick (i){
        //verificar si hay esta llena la casilla o si alguien ganó
        if(array[i] || calcularGanador(array)){
            return
        }
        //guardar X u O en la posicion i en el array nuevo nextSquare
        if(turno){
            nextSquares[i] = 'X'
        }else {
            nextSquares[i] =  'O'
        }
        //setear array para que sea igual a next squares
        setArray(nextSquares)
//cambiar turno, si era true, al aplicarle el set !true= false, entonces cambia
//a false y de nuevo se aplica el set !false= true, esto sucede despues del click
        setSigTurno(!turno)
    }
    const ganador = calcularGanador(array)
    let status
    if(ganador){
        status= 'Ganador: ' + ganador
    }else{
        status= (turno ? 'Turno X': 'Turno O')
    }
    function resetGame(Array, ArrayAux){
        setArray(array.map(element => element = null))
        setNextSquares(nextSquares.map(square => square = null))
        setSigTurno(true)
    }
    return (
        <div className="gameInterface">
            <section className="players">
                <div> 
                    <p>Player 1</p>
                    <p><img src='../../icons8-eliminar-100.png' /></p>
                </div>
                <div>
                    <p>Player 2</p>
                    <p><img src='../../icons8-círculo-100.png' /></p>
                 </div>
                
            </section>
            <section className="boardGame"> 
              {array.map((item,index)=>{
                return <Cuadro key={index} value={item} onSquareClick={() => handleClick(index)}/>

              })}
              <Cuadro value={array[0]} onSquareClick={() => handleClick(0)}/>
              <Cuadro value={array[1]} onSquareClick={() => handleClick(1)}/>
              <Cuadro value={array[2]} onSquareClick={() => handleClick(2)}/>
              <Cuadro value={array[3]} onSquareClick={() => handleClick(3)}/>
              <Cuadro value={array[4]} onSquareClick={() => handleClick(4)}/>
              <Cuadro value={array[5]} onSquareClick={() => handleClick(5)}/>
              <Cuadro value={array[6]} onSquareClick={() => handleClick(6)}/>
              <Cuadro value={array[7]} onSquareClick={() => handleClick(7)}/>
              <Cuadro value={array[8]} onSquareClick={() => handleClick(8)}/>
            </section>
            <section>
                <div>{status}</div>
                <button className='reset' onClick={()=> resetGame(array, nextSquares)}>Restart</button>
            </section>
           
        </div>
    )
}
function calcularGanador(array) {
    const posibilidadesGanar = 
    [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    for(let i=0; i<posibilidadesGanar.length; i++){
        const [a, b, c] = posibilidadesGanar[i]
        if(array[a] && array[a] === array[b] && array[a] === array[c]){
            return array[a]
        }
    }
    return null
}


export default TictactoeGame