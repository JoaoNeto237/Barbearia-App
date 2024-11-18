const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Uchih@itach1',
  database: 'usuariosDB',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.post('/api/usuarios', async (req, res) => {
  const { nome, telefone, senha } = req.body;

  if (!nome || !telefone || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const query = 'INSERT INTO usuarios (nome, telefone, senha) VALUES (?, ?, ?)';
    
    db.execute(query, [nome, telefone, hashedPassword], (err, results) => {
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

app.post('/api/login', async (req, res) => {
  const { telefone, senha } = req.body;

  if (!telefone || !senha) {
    return res.status(400).json({ message: 'Telefone e senha são obrigatórios' });
  }

  const query = 'SELECT * FROM usuarios WHERE telefone = ?';
  
  db.query(query, [telefone], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const user = results[0];
    
    const match = await bcrypt.compare(senha, user.senha);
    
    if (!match) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido', nome: user.nome });
  });
});

app.post('/api/agendar', (req, res) => {
  const { nomeCer, telefoneCer, barbeiroSelecionado, servicosSelecionados, selectedDate, selectedTime } = req.body;

  if (!nomeCer || !telefoneCer || !barbeiroSelecionado || !servicosSelecionados || !selectedDate || !selectedTime) {
    return res.status(400).json({ message: 'Todos os campos devem ser preenchidos.' });
  }

  res.status(200).json({ message: 'Agendamento realizado com sucesso!' });
});

app.post('/api/salvar', (req, res) => {
  const { nomeCer, telefoneCer, barbeiroSelecionado, servicoSelecionados, selectedDate, selectedTime } = req.body;

  if (!nomeCer || !telefoneCer || !barbeiroSelecionado || !servicoSelecionados || !selectedDate || !selectedTime) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const query = `
    INSERT INTO agendamentos (nomeCer, telefoneCer, barbeiroSelecionado, servicoSelecionados, selectedDate, selectedTime)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.execute(query, [nomeCer, telefoneCer, barbeiroSelecionado, servicoSelecionados, selectedDate, selectedTime], (err, results) => {
    if (err) {
      console.error('Erro ao salvar o agendamento:', err);
      return res.status(500).json({ message: 'Erro ao salvar o agendamento' });
    }

    res.status(201).json({ message: 'Agendamento registrado com sucesso!', id: results.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
