# API de Consulta de CEP

## Descrição

Esta é uma API desenvolvida com **Node.js** e **Express.js** para consulta de informações sobre endereços com base no CEP. A API usa a biblioteca **cep-promise** para buscar os dados de endereço relacionados ao CEP fornecido.

### O que faz?
A API oferece uma rota `/consultar-cep/:cep` que permite ao usuário consultar dados como:
- Logradouro
- Bairro
- Cidade
- Estado

A resposta é retornada em formato **JSON**.

---

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para criar servidores web e APIs em Node.js.
- **cep-promise**: Biblioteca que consulta informações de endereços a partir de um CEP.

---

## Como Instalar

### Pré-requisitos

Você precisa ter o **Node.js** instalado no seu computador. Caso não tenha, faça o download em [Node.js](https://nodejs.org/).

### Passos para Instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cep-api-nodejs.git
   cd cep-api-nodejs

2. Instale as dependências do projeto:
````bash
npm install

3. Rodando o servidor:
```bash
node server.js

### Como Usar:
URL: http://localhost:3000/consultar-cep/{CEP}
Método: GET
Parâmetros: O CEP deve ser passado como parâmetro na URL.

### Resposta de Sucesso:
{
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP"
}
