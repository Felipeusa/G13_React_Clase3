import React from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
    return (
        <div> 
        <h1>Crear Cuenta</h1>
        <h2>Ingrese los datos del usuario</h2>
        <input placeholder='Nombre'/>
        <input placeholder='Email'/>{/*este es mi comentarios*/}
        <input placeholder='Password'/>
        <input placeholder='Confirmar'/>{/*este es mi comentarios*/}
        <button>Crear Cuenta</button>
        <Link to={'/'}>Volver</Link>
        </div>

    );
}

export default CrearCuenta;