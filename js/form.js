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

    //mostro il prezzo
    resultPrice.innerText = userPrice.toFixed(2) + '€';

}
)