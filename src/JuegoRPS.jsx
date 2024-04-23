import { useState } from "react"

export const JuegoRPS = () =>{

    const piedraURL = './src/piedra.png'
    const papelURL = './src/papel.png'
    const tijeraURL = './src/tijera.png'
    const closeButton = './src/icon-close.webp'

    //Lógica del juego
    const [choose, setChosen] = useState(
        {
            victorias: 0,
            empate: 0,
            derrotas: 0,
            resultado: '',
            jugada: ''
        }
    )

    const randomNum = () => {return Math.round(Math.random() * 100)}
    
    const chooseRock = () =>{
        const numRandom = randomNum()
    
        if (numRandom < 33){
            setChosen({
                ...choose,
                empate: choose.empate + 1,
                resultado: 'empate',
                jugada: 'Piedra'
            }) //Toca piedra
            
        }else if (numRandom > 33 && numRandom < 67){
            setChosen({
                ...choose,
                derrotas: choose.derrotas + 1,
                resultado: 'derrota',
                jugada: 'Papel'
            })//Toca papel
             
        }else{
            setChosen({
                ...choose,
                victorias: choose.victorias + 1,
                resultado: 'victoria',
                jugada: 'Tijera'
            }) //Toca tijera
            
        }
        toggleElement();
    }

    const choosePaper = () =>{
        const numRandom = randomNum()
    
        if (numRandom < 33){
            setChosen({
                ...choose,
                victorias: choose.victorias + 1,
                resultado: 'victoria',
                jugada: 'Piedra'
            })//Toca piedra
            
        }else if (numRandom > 33 && numRandom < 67){
            setChosen({
                ...choose,
                empate: choose.empate + 1,
                resultado: 'empate',
                jugada: 'Papel'
            })//Toca papel
             
        }else{
            setChosen({
                ...choose,
                derrotas: choose.derrotas + 1,
                resultado: 'derrota',
                jugada: 'Tijera'
            })//Toca tijera

        }
        toggleElement();
    }

    const chooseScissors = () => {
        const numRandom = randomNum()
    
        if (numRandom < 33){
            setChosen({
                ...choose,
                derrotas: choose.derrotas + 1,
                resultado: 'derrota',
                jugada: 'Piedra'
            })//Toca piedra
            
        }else if (numRandom > 33 && numRandom < 67){
            setChosen({
                ...choose,
                victorias: choose.victorias + 1,
                resultado: 'victoria',
                jugada: 'Papel'
            })//Toca papel
             
        }else{
            setChosen({
                ...choose,
                empate: choose.empate + 1,
                resultado: 'empate',
                jugada: 'Tijera'
            })//Toca tijera
        
        }
        toggleElement();
    }

    const numRondas = () =>{
        return(
            choose.derrotas + choose.victorias + choose.empate
        )
    }

    const resetValues = () =>{
        const resettedObj = {
            victorias: 0,
            empate: 0,
            derrotas: 0,
            resultado: '',
            jugada: ''
        }
        setChosen(resettedObj)
    }

    //Mostrar resultados

    const [active, setActive] = useState(false)

    const toggleElement = () =>{
        setActive(!active)
    }

    return(
        <div id="game">
            <h1>Ronda {numRondas()}</h1>
            <div id="marcador">
                <h2>Marcador</h2>
                <div id="results">
                    <p id="victories">Victorias: <span>{choose.victorias}</span></p>
                    <p id="draws">Empates: <span>{choose.empate}</span></p>
                    <p id="loses">Derrotas: <span>{choose.derrotas}</span></p>
                </div>
            </div>
            <div id="buttons">
                <button id="rock" onClick={chooseRock}><img src={piedraURL} alt="Piedra"/></button>
                <button id="paper" onClick={choosePaper}><img src={papelURL} alt="Papel" /></button>
                <button id="scissors" onClick={chooseScissors}><img src={tijeraURL} alt="Tijera" /></button>
            </div>
            {active ? (
                <div id="tarjeta">
                    <button id="close-icon" onClick={toggleElement}><img src={closeButton} alt="" /></button>
                    <div id="jugadas">
                        <p>Jugada de la máquina: <span id={choose.resultado}>{choose.jugada}</span></p>
                        <p id={choose.resultado}>{choose.resultado}</p>
                    </div>
                </div>
            ) : ""}
            
            <button id="reset-button" onClick={resetValues}>Reset</button>
        </div>
    )
}


