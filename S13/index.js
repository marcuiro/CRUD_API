// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web
// Projeto: (Sem Projeto)
// Devs: Marco Antônio Martins de Carvalho Neto
// DATA: 21/05/2023

const express = require('express');
const app = express();

const PacienteController = require('./app/controllers/PacienteController.js');
const pacienteController = new PacienteController();

const ListController = require('./app/controllers/ListController.js');
const listController = new ListController();

const AgendamentoController = require('./app/controllers/AgendamentoController.js');
const agendamentoController = new AgendamentoController();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/list', (req, res) => listController.findAll(req, res));
app.post('/list', (req, res) => listController.create(req, res));
app.get('/list/:id', (req, res) => listController.findById(req, res));
app.put('/list/:id', (req, res) => listController.update(req, res));
app.delete('/list/:id', (req, res) => listController.delete(req, res));

app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id', (req, res) => pacienteController.update(req, res));
app.delete('/paciente/:id', (req, res) => pacienteController.delete(req, res));

app.get('/agendamento', (req, res) => agendamentoController.findAll(req, res));
app.post('/agendamento', (req, res) => agendamentoController.create(req, res));
app.get('/agendamento/:id', (req, res) => agendamentoController.findById(req, res));
app.put('/agendamento/:id', (req, res) => agendamentoController.update(req, res));
app.delete('/agendamento/:id', (req, res) => agendamentoController.delete(req, res));

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

