// Buscador de elementos do DOM
const contador = document.getElementById('contador');
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('disminuir');
const btnReset = document.getElementById('reset');

const campoTexto = document.getElementById('campoTexto');
const areaParagrafos = document.getElementById('areaParagrafos');
const contadorCaracteres = document.getElementById('contadorCaracteres');

const tipoLista = document.getElementById('tipoLista');
const btnAdicionarItem = document.getElementById('btnAdicionarItem');
const areaListas = document.getElementById('areaListas');

let contagem = 0;
let itemCount = 0;

// Contador de cliques
btnAumentar.addEventListener('click', function () {
    contagem++;
    contador.textContent = contagem;
});

btnDiminuir.addEventListener('click', function () {
    if (contagem === 0) {
        alert('O contador já está em zero!');
    } else {
        contagem--;
        contador.textContent = contagem;
    }
});

// Enter adiciona parágrafo
campoTexto.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        const texto = campoTexto.value.trim();
        if (texto !== '') {
            const novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = texto;
            areaParagrafos.appendChild(novoParagrafo);
            campoTexto.value = '';
            contadorCaracteres.textContent = 0;
        }
    }
});

// --- Contador de caracteres (sem espaços) ---
campoTexto.addEventListener('input', function () {
    const semEspacos = campoTexto.value.replaceAll(' ', '');
    contadorCaracteres.textContent = semEspacos.length;
});

// Adicionar item em uma lista
btnAdicionarItem.addEventListener('click', function () {
    itemCount++;
    const lista = document.createElement(tipoLista.value); // 'ul' ou 'ol'
    const item = document.createElement('li');
    item.textContent = 'Item ' + itemCount;
    lista.appendChild(item);
    areaListas.appendChild(lista);
});

// Resetando tudo
btnReset.addEventListener('click', function () {
    contagem = 0;
    contador.textContent = 0;
    areaParagrafos.innerHTML = '';
    areaListas.innerHTML = '';
    campoTexto.value = '';
    contadorCaracteres.textContent = 0;
    itemCount = 0;
});
