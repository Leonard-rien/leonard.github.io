// functions/writeText.js
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/writeText', (req, res) => {
  try {
    const texteRecu = req.body.texte;
    console.log('Texte reçu:', texteRecu);

    // Traitez le texte comme nécessaire
    // ...

    res.status(200).json({ message: 'Texte reçu avec succès.' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Une erreur s\'est produite.' });
  }
});

module.exports.handler = async (event, context) => {
  console.log('Function executed with event:', event);
  // ...

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Function executed successfully.' }),
  };
};
