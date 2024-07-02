const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const notas = [100, 50, 20, 10, 5, 2];

app.post('/api/saque', (req, res) => {
  const { valor } = req.body;

  // Validando se o valor é um número inteiro positivo
  if (!Number.isInteger(valor) || valor <= 0) {
    return res.status(400).json({ error: 'Valor de saque inválido. Deve ser um número inteiro positivo.' });
  }

  let restante = valor;
  const resultado = {};

  // Calculando a quantidade mínima de cédulas necessárias
  for (const nota of notas) {
    console.log(nota)
    resultado[nota] = Math.floor(restante / nota);
    restante %= nota;
  }

  // Verificando se o valor restante é zero (saque possível)
  if (restante !== 0) {
    return res.status(400).json({ error: 'Valor de saque não pode ser atendido com as cédulas disponíveis.' });
  }

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
