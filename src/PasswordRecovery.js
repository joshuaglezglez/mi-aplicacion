import React, { useState } from 'react';
// Importa useNavigate si planeas redirigir al usuario después de la recuperación

function PasswordRecovery() {
    const [email, setEmail] = useState('');
    // const navigate = useNavigate(); // Si planeas usar la navegación

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos al backend
        // Por ejemplo, una solicitud POST a tu servidor

        // Después de la recuperación, puedes redirigir o mostrar un mensaje
        // navigate('/ruta-post-recuperacion');
    };

    return (
        <div>
            <h2>Recuperación de Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        placeholder="Introduce tu correo electrónico"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <button type="submit">Recuperar Contraseña</button>
            </form>
            <div>
                ¿Ya recibiste tu código de reestablecimiento? <a href="/reset-password">Da click aquí para cambiar tu contraseña</a>
            </div>
        </div>
    );
}

export default PasswordRecovery;
