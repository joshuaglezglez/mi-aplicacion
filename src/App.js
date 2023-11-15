import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Asegúrate de importar tu componente Login desde la ubicación correcta
import Welcome from './Welcome'; // Importa el componente de bienvenida si lo tienes

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/bienvenida" element={<Welcome />} />
                <Route path="/" element={<Login />} /> {/* Ruta para la página de inicio */}
            </Routes>
        </Router>
    );
}

export default App;
