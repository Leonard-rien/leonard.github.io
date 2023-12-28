// functions/writeText.js

exports.handler = async function (event, context) {
  try {
    // Récupérez le texte à partir du corps de la requête
    const nouveauTexte = event.body;

    // Vous pouvez traiter ou enregistrer le texte comme vous le souhaitez
    // Dans cet exemple, nous allons simplement le renvoyer
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Le texte a été enregistré avec succès.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur s'est produite.' }),
    };
  }
};
