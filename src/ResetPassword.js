import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const navigate = useNavigate(); // Si planeas usar la navegación

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que las nuevas contraseñas coincidan
        if (newPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/reset-password', { // Asegúrate de usar la URL correcta de tu API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, resetCode, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                // Si el cambio de contraseña es exitoso
                alert('Contraseña cambiada con éxito.');
                // navigate('/login'); // Descomenta esta línea si deseas redirigir al usuario después del cambio de contraseña
            } else {
                // Si hay un error en el cambio de contraseña
                alert(data.message || 'Error al cambiar la contraseña.');
            }
        } catch (error) {
            // Maneja errores de red o de conexión
            console.error('Error de conexión con el servidor:', error);
            alert('No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.');
        }
    };


    return (
        <div>
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Código de Restablecimiento:</label>
                    <input
                        type="text"
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nueva Contraseña:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirmar Nueva Contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cambiar Contraseña</button>
            </form>
        </div>
    );
}

export default ResetPassword;
