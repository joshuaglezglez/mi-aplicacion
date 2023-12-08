import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import PasswordRecovery from './PasswordRecovery';
import ResetPassword from './ResetPassword';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/bienvenida" element={<Welcome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/" element={<Login />} /> {/* Ruta para la página de inicio */}
            </Routes>
        </Router>
    );
}

export default App;
