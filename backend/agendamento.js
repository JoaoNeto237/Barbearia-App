const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Uchih@itach1',
  database: 'agendamentoDB',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.post('/api/agendar', async (req, res) => {
  const { nome, telefone, barbeiro, servicoSelecionado, dataMarcado, hora } = req.body;

  try {
    const query = 'INSERT INTO agendamentos (nome, telefone, barbeiro, servicoSelecionado, dataMarcado, hora) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.execute(query, [nome, telefone, barbeiro, servicoSelecionado, dataMarcado, hora], (err, results) => {
      if (err) {
        console.error('Erro ao salvar o usuário:', err);
        return res.status(500).json({ message: 'Erro ao salvar o usuário' });
      }

      res.status(201).json({ message: 'Usuário registrado com sucesso!', id: results.insertId });
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://192.168.1.8:${PORT}`);
});
