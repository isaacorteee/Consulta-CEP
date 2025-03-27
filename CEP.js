const express = require('express');
const cep = require('cep-promise');

const app = express();

const PORT = 3000;

app.get('/consultar-cep/:cep', async (req, res) => {
  const { cep: cepInput } = req.params; 

  try {
    if (cepInput.length !== 8 || !/^\d+$/.test(cepInput)) {
      return res.status(400).json({ error: 'CEP inválido! Deve ter 8 dígitos numéricos.' });
    }

    const response = await cep(cepInput);

    return res.json({
      logradouro: response.street,
      bairro: response.neighborhood,
      cidade: response.city,
      estado: response.state,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao consultar o CEP.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});