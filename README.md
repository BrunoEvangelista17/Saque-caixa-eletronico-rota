# Projeto Desafio Técnico Morada.ai: Caixa Eletrônico API

## Descrição

Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express

## Principais Desafios

- **Tornar o projeto de fácil compreensão**: A implementação foi feita de forma clara e modular, com comentários explicativos no código para facilitar o entendimento.
- **Tornar o projeto eficiente**: A lógica implementada calcula a quantidade mínima de cédulas necessárias de maneira eficiente, com o mínimo de linhas possivel porém com o resultado desejado.
- **Retornar pela rota o valor obtido pela lógica**: O valor de saque é processado e retornado diretamente pela rota `/api/saque`, visto que não tinha familiaridade a rotas que não fizessem requisições ao banco de dados.
- **Criar um passo a passo coeso e claro para o usuário**: O guia de execução foi elaborado para ser seguido facilmente por qualquer usuário, desde a instalação até a realização das requisições.

## Como Executar o Código

### Pré-requisitos

- Node.js instalado

### Passo a Passo

1. **Instalar Dependências**
    - Abra o terminal da sua IDE e navegue até a pasta onde está localizado o arquivo `package.json`.
    - Execute o comando abaixo para instalar as dependências do projeto:
      ```bash
      npm install
      ```

2. **Iniciar o Servidor**
    - Após a instalação do pacote Express, execute o comando abaixo para iniciar o servidor:
      ```bash
      node index.js
      ```

3. **Fazer uma Requisição**
    - Utilize um cliente HTTP como `curl` ou Postman para fazer uma requisição ao endpoint. Exemplo de comando usando `curl`:
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:3000/api/saque
      ```

4. **Receber a Resposta**
    - Você deve receber uma resposta similar a esta:
      ```json
      {
        "100": x,
        "50": y,
        "20": z,
        "10": a,
        "5": b,
        "2": c
      }
      ```
    - Onde `x`, `y`, `z`, `a`, `b` e `c` são inteiros representando a quantidade de cada cédula necessária para o valor de saque solicitado.

## Estrutura do Projeto

O projeto possui a seguinte estrutura:

- `index.js`: Arquivo principal que contém a lógica da API e a inicialização do servidor.

## Observações

- Certifique-se de que a porta 3000 não está sendo utilizada por outro serviço para evitar conflitos.
- Caso precise alterar a porta do servidor, modifique a constante `PORT` no arquivo `index.js`.