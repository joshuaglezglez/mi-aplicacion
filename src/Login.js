import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const validUser = 'usuario@example.com';
    const validPassword = 'contraseña123';

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === validUser && password === validPassword) {
            // Autenticación exitosa
            // Redirige al usuario a la página de bienvenida con el correo electrónico
            navigate(`/bienvenida?email=${email}`);
        } else {
            // Credenciales inválidas
            console.error('Credenciales inválidas.');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;
