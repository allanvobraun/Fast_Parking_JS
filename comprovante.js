import {readDB} from './commom.js';

function createComprovante() {
  const recordOwner = document.querySelector('#form-receipt')
  const newInput = document.createElement('input')
  newInput.innerHTML = `
                    <label>Nome:</label>
                    <input class="input-readonly" value="${owner.nome}" readonly/>

                    <label>Placa:</label>
                    <input class="input-readonly" value="${db.placa}" readonly/>

                    <label>Data:</label>
                    <input class="input-readonly" value="${db.data}" readonly/>

                    <label>Hora:</label>
                    <input class="input-readonly" value="${db.hora}" readonly/>
    `
  recordOwner.appendChild(newInput)
}

console.log(readDB())
