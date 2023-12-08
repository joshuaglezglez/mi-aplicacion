import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Asegúrate de importar tu componente Login desde la ubicación correcta
import Welcome from './Welcome';
import Register from './Register';
import PasswordRecovery from './PasswordRecovery'; // Asegúrate de que la ruta sea correcta


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/bienvenida" element={<Welcome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/" element={<Login />} /> {/* Ruta para la página de inicio */}
            </Routes>
        </Router>
    );
}

export default App;
