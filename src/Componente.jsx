import { useState } from "react"

export const Componente = ({nombre, userName}) =>{

    const [estado, setEstado] = useState(
        {
            isFollowing: true
        }
    )

    const fomartUsername = () =>{return `@${userName}`}
    return (
        <div id="twitter">
            <img src="#" alt="Imagen Perfil" />
            <h3>{nombre}</h3>
            <strong>{fomartUsername()}</strong>
            <button>{estado.isFollowing ? 'Siguiendo' : 'Seguir'}</button>
        </div>
    )
}