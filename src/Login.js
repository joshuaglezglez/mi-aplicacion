import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Si la respuesta es exitosa, redirige al usuario
                navigate(`/bienvenida?email=${email}`);
            } else {
                // Si la respuesta del servidor indica un error (ej. credenciales incorrectas)
                alert(data.message || 'Error en el inicio de sesión');
            }
        } catch (error) {
            // Maneja errores de red o conexión
            console.error('Error de conexión con el servidor:', error);
            alert('No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.');
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
            <div>
                ¿No tienes una cuenta? <a href="/register">Regístrate</a>
            </div>
            <div>
                <a href="/password-recovery">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    );


}

export default Login;
