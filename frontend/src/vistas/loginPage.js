import React, {useEffect, useState} from "react";
import "../estilos/login.css"


function LoginHome() {

    let [username, setUsername] = useState({})
    let [password, setPassword] = useState({})
    const [datosUser, setDatosUser] = useState([{}]);
    useEffect(
        () => {
        fetch("http://localhost:8087/")
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                setDatosUser(response)
            }
            
        )
    }, []
    )
    const handleSubmit = event => {
        
        console.log(datosUser)

    }

    console.log(datosUser)

    const setUser = event => {
        const userName = event.target.value
        setUsername(userName);
    }

    const setPass = event => {
        const userPass = event.target.value
        setPassword(userPass)
    }

    let myUser = {
        "usuario": username,
        "contraseña": password
    }

    


    return(
        <>
            <div className="login-container">
                <div className="caja-container">
                    <form className="caja-container" onSubmit={handleSubmit}>
                        <h1 className="encabezados">Tienda online Web Master's accesories</h1>
                        <h2 className="encabezados">Usuario</h2>
                        <input className="inputfield" type="text" placeholder="Nombre de usuario" onChange={setUser}></input>
                        <h2 className="encabezados">Contraseña</h2>
                        <input className="inputfield" type="password" placeholder="su contraseña" onChange={setPass}></input>
                        <button id="mybtn" type="submit">Iniciar sesión</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default LoginHome;