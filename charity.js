const button = document.getElementById("submit");
const Balance = document.getElementById("SigneAstro")


console.log(button)






//jour     https://kayoo123.github.io/astroo-api/jour.json

//semaine   https://kayoo123.github.io/astroo-api/hebdomadaire.jso:n

let dateJour = document.getElementById("dateJour");
let dateSemaine = document.getElementById("dateSemaine");


const euroscopeJour = async () => {
    const requestsString = `https://kayoo123.github.io/astroo-api/jour.json`
    let data = await fetch (requestsString);
    let response = await data.json();
    console.log(response)
    Balance.textContent = response.balance
}




euroscopeJour();
button.addEventListener("click", euroscopeJour());
