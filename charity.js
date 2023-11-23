let name = document.getElementById("name");
let image = document.getElementById("image");
let button = document.getElementById("button");
let lieu = document.getElementById("lieux");

const requestString = `https://journal-officiel-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/jo_associations/records?limit=20&refine=localisation_facette%3A%22%C3%8Ele-de-France%2FParis%22&refine=domaine_activite_libelle_categorise%3A%22culture%2C%20pratiques%20d%E2%80%99activit%C3%A9s%20artistiques%2C%20culturelles%2Fphotographie%2C%20cin%C3%A9ma%20(dont%20cin%C3%A9-clubs)%22&refine=domaine_activite_libelle_categorise%3A%22culture%2C%20pratiques%20d%E2%80%99activit%C3%A9s%20artistiques%2C%20culturelles%22&refine=domaine_activite_libelle_categorise%3A%22Sports%2C%20activit%C3%A9s%20de%20plein%20air%2FMarche%20sportive%20(randonn%C3%A9e%20p%C3%A9destre%2C%20raid%2C%20trekking%2C%20course%20orientation)%22`
 
 const charity = async () => {
    let data = await fetch (requestString)
    let response = await data.json()
    console.log(response)
 }

 const requestString2 = "/api/explore/v2.1/catalog/datasets/jo_associations/records?limit=20&refine=localisation_facette%3A%22%C3%8Ele-de-France%2FParis%22&refine=domaine_activite_libelle_categorise%3A%22culture%2C%20pratiques%20d%E2%80%99activit%C3%A"

const newCharity = async () => {
    let data = await fetch (requestString2)
    let response = await data.json()
    console.log(response)
}

 domaine_activite_libelle_categorise :[
    "Sports, activités de plein air/Marche sportive (randonnée pédestre, raid, trekking, course orientation)",
    "culture, pratiques d’activités artistiques, culturelles/photographie, cinéma (dont ciné-clubs)"
    ],

charity();
