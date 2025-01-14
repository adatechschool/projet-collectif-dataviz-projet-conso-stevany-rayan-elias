 // Attendez que le contenu du document soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
  // Obtenez une référence à l'élément HTML avec l'ID "horoscopeResult"
  const horoscopeResult = document.getElementById("horoscopeResult");
  // Obtenez une référence aux boutons HTML avec les ID correspondants
  const getHoroscopeButton = document.getElementById("getHoroscopeButton");
  const getHoroscopeSemaineButton = document.getElementById("getHoroscopeSemaineButton");
  // Définition de la fonction getHoroscope qui sera appelée lorsqu'un bouton est cliqué
  async function getHoroscope(type) {
    // Obtenez la valeur de l'élément d'entrée HTML avec l'ID "sign", supprimez les espaces inutiles et convertissez-la en minuscules
    const userSign = document.getElementById("sign").value.trim().toLowerCase();
    // Liste de tous les signes astrologiques valides (en minuscules)
    const allSigns = ["bélier", "taureau", "gémeaux", "cancer", "lion", "vierge", "balance", "scorpion", "sagittaire", "capricorne", "verseau", "poissons"];
    // Vérifiez si le signe de l'utilisateur est dans la liste des signes valides
    if (allSigns.includes(userSign)) {
      try {
        let apiUrl = '';
        // Déterminez l'URL de l'API en fonction du type d'horoscope (quotidien ou hebdomadaire)
        if (type === 'quotidien') {
          apiUrl = 'https://kayoo123.github.io/astroo-api/jour.json';
        } else if (type === 'hebdomadaire') {
          apiUrl = 'https://kayoo123.github.io/astroo-api/hebdomadaire.json';
        }
        // Effectuez une requête fetch pour obtenir les données de l'API
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Si des données sont disponibles pour le signe de l'utilisateur
        if (data[userSign]) {
          let horoscopeType = '';
          // Déterminez le type d'horoscope pour le texte à afficher
          if (type === 'quotidien') {
            horoscopeType = 'quotidien';
          } else {
            horoscopeType = 'hebdomadaire';
          }
          // Affichez l'horoscope dans l'élément HTML avec l'ID "horoscopeResult"
          horoscopeResult.textContent = `Horoscope ${horoscopeType} pour ${userSign} : ${data[userSign]}`;
        } else {
          // Si aucune donnée n'est disponible pour le signe de l'utilisateur
          horoscopeResult.textContent = `Aucun horoscope trouvé pour ${userSign}.`;
        }
      } catch (error) {
        // Gérez les erreurs possibles lors de la récupération des données de l'API
        console.error('Une erreur s\'est produite :', error);
      }
    } else {
      // Si le signe de l'utilisateur n'est pas valide
      horoscopeResult.textContent = "Veuillez entrer un signe astrologique valide.";
    }
  }
  // Ajoutez des écouteurs d'événements aux boutons pour appeler la fonction getHoroscope lorsque les boutons sont cliqués
  getHoroscopeButton.addEventListener("click", function () {
    getHoroscope('quotidien'); // Appel avec le type "quotidien"
  });
  getHoroscopeSemaineButton.addEventListener("click", function () {
    getHoroscope('hebdomadaire'); // Appel avec le type "hebdomadaire"
  });

  document.getElementById(".horoscopeResult").style.display="block"
  document.querySelector(".error").style.display="none"

  
});