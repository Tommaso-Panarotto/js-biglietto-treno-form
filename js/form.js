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
const resultName = document.getElementById('full-name')
const resultAge = document.getElementById('age');
const resultPrice = document.getElementById('total-price');
const resultSale = document.getElementById('sale');
const userName = document.getElementById('NAME');
const userKilometres = document.getElementById('KMS');
const userAge = document.querySelector('select');
const userGenerate = document.getElementById('generate-btn');
const userReset = document.getElementById('reset-btn')
