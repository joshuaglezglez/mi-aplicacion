import React from 'react';
import { useLocation } from 'react-router-dom';

function Welcome() {
    // Obtén la ubicación actual para acceder a la información de la ruta
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    return (
        <div>
            <h2>Bienvenido</h2>
            {email && <p>Bienvenido, {email}.</p>}
            <p>¡Gracias por iniciar sesión!</p>
        </div>
    );
}

export default Welcome;
