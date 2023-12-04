const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

app.use(express.json());

const db = new sqlite3.Database('miBaseDeDatos.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

    db.get(query, [email, password], (err, row) => {
        if (err) {
            res.status(500).send('Error en la base de datos');
            return;
        }

        if (row) {
            res.send({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).send({ message: 'Credenciales inválidas' });
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
