import { useState } from "react"

export const JuegoRPS = () =>{

    const piedraURL = './src/piedra.png'
    const papelURL = './src/papel.png'
    const tijeraURL = './src/tijera.png'

    const [choose, setChosen] = useState(
        {
            victorias: 0,
            empate: 0,
            derrotas: 0
        }
    )

    const randomNum = () => {return Math.round(Math.random() * 100)}
    
    const chooseRock = () =>{
        const numRandom = randomNum()
        var finalObj = {...choose}
    
        if (numRandom < 33){
            var finalObj = {
                ...choose,
                empate: choose.empate + 1
            }
            console.log("Piedra")
            
        }else if (numRandom > 33 && numRandom < 67){
            var finalObj = {
                ...choose,
                derrotas: choose.derrotas + 1
            }
            console.log("Papel")
             
        }else{
            var finalObj = {
                ...choose,
                victorias: choose.victorias + 1
            }
            console.log("Tijera")
        }
        setChosen(finalObj); 
    }

    const choosePaper = () =>{
        const numRandom = randomNum()
        var finalObj = {...choose}
    
        if (numRandom < 33){
            var finalObj = {
                ...choose,
                victorias: choose.victorias + 1
            }
            console.log("Piedra")
            
        }else if (numRandom > 33 && numRandom < 67){
            var finalObj = {
                ...choose,
                empate: choose.empate + 1
            }
            console.log("Papel")
             
        }else{
            var finalObj = {
                ...choose,
                derrotas: choose.derrotas + 1
            }
            console.log("Tijera")
        }
        setChosen(finalObj); 
    }

    const chooseScissors = () => {
        const numRandom = randomNum()
        var finalObj = {...choose}
    
        if (numRandom < 33){
            var finalObj = {
                ...choose,
                derrotas: choose.derrotas + 1
            }
            console.log("Piedra")
            
        }else if (numRandom > 33 && numRandom < 67){
            var finalObj = {
                ...choose,
                victorias: choose.victorias + 1
            }
            console.log("Papel")
             
        }else{
            var finalObj = {
                ...choose,
                empate: choose.empate + 1
            }
            console.log("Tijera")
        }
        setChosen(finalObj);
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
            derrotas: 0
        }
        setChosen(resettedObj)
    }

    return(
        <div id="game">
            <h1>Ronda {numRondas()}</h1>
            <div id="buttons">
                <button id="rock" onClick={chooseRock}><img src={piedraURL} alt="Piedra"/></button>
                <button id="paper" onClick={choosePaper}><img src={papelURL} alt="Papel" /></button>
                <button id="scissors" onClick={chooseScissors}><img src={tijeraURL} alt="Tijera" /></button>
            </div>
            <div id="results">
                <p id="victories">Victorias: <span>{choose.victorias}</span></p>
                <p id="draws">Empates: <span>{choose.empate}</span></p>
                <p id="loses">Derrotas: <span>{choose.derrotas}</span></p>
            </div>
            <button id="reset-button" onClick={resetValues}>Reset</button>
        </div>
    )
}


