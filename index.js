/*
* mesmo sendo um codigo simples, seria bom trabalhar a modularizacao
* app.js configurar express e importar  rotas
* index.js inicializacao do servidor
* routes/saqueroutes.js arquivo de rotas, importa funcao e define rota
* services/saqueservices contem a logica 
*/

/* seria uma boa pratica incluir arquivo de testes */

/* no caso de expandir o codigo e logica, mudar para modulo ES e utilizar import/export */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// tirar bodyparser, é nativo do express 
app.use(bodyParser.json());

const notas = [100, 50, 20, 10, 5, 2];

app.post('/api/saque', (req, res) => {
  const { valor } = req.body;

  // Validando se o valor é um número inteiro positivo
  if (!Number.isInteger(valor) || valor <= 0) {
    return res.status(400).json({ error: 'Valor de saque inválido. Deve ser um número inteiro positivo.' });
  }

  /* SEPARAR LÓGICA EM UMA FUNÇÃO SEPARADA, arquivo a parte */

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
