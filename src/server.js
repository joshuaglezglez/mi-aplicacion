const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Necesitas instalar el paquete 'cors' si aún no lo has hecho

const app = express();
app.use(cors());


app.use(express.json());

let db = new sqlite3.Database('miBaseDeDatos.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
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
