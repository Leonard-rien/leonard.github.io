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
  try {


    // Afficher le corps de la requête sans le parser
    console.log(event.body);

    // Traitez le texte comme nécessaire
    // ...

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Function executed successfully.' }),
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur s\'est produite.' }),
    };
  }
};
