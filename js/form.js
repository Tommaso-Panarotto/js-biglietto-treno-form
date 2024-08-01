/*
0. Recupero gli elementi dal DOM
1. Chiedo all'utente tutti i dati
3. verifico i dati
4. Calcolo il costo del biglietto
5. Applico al costo del biglietto eventuali sconti
6. Inserisco gli elementi nel DOM
 */

//Fase preparatoria
const resultkilometres = document.getElementById('kilometres');
const resultName = document.getElementById('full-name');
const resultAge = document.getElementById('age');
const resultPrice = document.getElementById('total-price');
const resultSale = document.getElementById('sale');
const userName = document.getElementById('NAME');
const userKilometres = document.getElementById('KMS');
const userAge = document.querySelector('select');
const userGenerate = document.getElementById('generate-btn');
const userReset = document.getElementById('reset-btn');
const userForm = document.querySelector('form');
const userData = document.querySelectorAll('.info');
const userVagon = document.getElementById('vagon');
const userCD = document.getElementById('CD')

//Fase elaboratoria
userGenerate.addEventListener('click', function () {

    //Fase raccolta dati
    const inputName = userName.value.trim();
    const inputKilometres = userKilometres.value.trim();
    const inputAge = userAge.value;

    //mostro i dati inseriti
    resultName.innerText = inputName;
    resultkilometres.innerText = `Fai ${inputKilometres} Km`;
    resultAge.innerText = inputAge;

    //Validazione
    const isKilometresInvalid = isNaN(inputKilometres) || inputKilometres < 1;
    const isNameInvalid = !inputName;

    if (isKilometresInvalid || isNameInvalid) {
        //errore
        const errorMessage = isKilometresInvalid ? 'i chilometri almeno maggiore o uguale a 1'
            : 'nome non valido';
        alert(errorMessage);

        //ricarico la pagina
        location.reload();
    }

    //Fase di elaborazione
    //calcolo costo bieglietto
    let userPrice = inputKilometres * 0.21;

    //Applicazione eventuali sconti
    if (userAge.value === 'Minorenne') {
        resultSale.innerHTML = `<del class="text-danger">€${userPrice.toFixed(2)}</del>`;

        //calcolo sconto minori
        userPrice *= 0.8;

        //mostro Sconto
        resultSale.innerHTML += " " + '20% di sconto'

    } else if (userAge.value === 'Pensionato') {
        resultSale.innerHTML = `<del class="text-danger">€${userPrice.toFixed(2)}</del>`;

        //calcolo sconto pensionati
        userPrice *= 0.6;

        //mostro sconto
        resultSale.innerHTML += " " + '40% di sconto'
    } else {

        //pulisco campo sconti perchè non applicabile
        resultSale.innerText = "";
    }

    //mostro il prezzo
    console.log('il costo del tuo biglietto é: €' + userPrice.toFixed(2));
    resultPrice.innerText = userPrice.toFixed(2) + '€';

    //Vagone
    const vagon = Math.floor(Math.random() * 9) + 1;
    userVagon.innerText = vagon;

    //Codice Passeggero
    const CD = `9` + (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    userCD.innerText = CD;


}
)

//Reset del Form e dei campi compilati
userReset.addEventListener('click', function () {
    userForm.reset();

    const userData = document.querySelectorAll(".info");
    for (let i = 0; i < userData.length; i++) {
        userData[i].innerText = '';
    }
}
)
