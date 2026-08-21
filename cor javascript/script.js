const btnvermelho = document.getElementById('btnvermelho');
const btnverde = document.getElementById('btnverde');
const btnazul = document.getElementById('btnazul');
const btnamarelo = document.getElementById('btnamarelo');

btnvermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

btnverde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

btnazul.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

btnamarelo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});