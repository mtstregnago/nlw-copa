let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
let green = document.querySelector('#green')

yellow.addEventListener('click', () => {
  document.body.className = 'yellow'
})

blue.addEventListener('click', () => {
  document.body.className = 'blue'
})

green.addEventListener('click', () => {
  document.body.className = 'green'
})

function createGame(player1, hour, player2) {
  return `
 <li>
      <img src="./assets/countries/icon-${player1}.svg" alt="${player1} flag" />
      <strong>${hour}</strong>
      <img src="./assets/countries/icon-${player2}.svg" alt="${player2} flag" />
    </li>
 `
}

let delay = -0.1
function createCard(date, day, games) {
  delay = delay + 0.1
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('20/11', 'DOMINGO', createGame('Catar', '13:00', 'Equador')) +
  createCard(
    '21/11',
    'SEGUNDA',
    createGame('Inglaterra', '10:00', 'Irã') +
      createGame('Senegal', '13:00', 'Holanda') +
      createGame('Estados Unidos', '16:00', 'Gales')
  ) +
  createCard(
    '22/11',
    'TERÇA',
    createGame('Argentina', '07:00', 'Arabia Saudita') +
      createGame('Dinamarca', '10:00', 'Tunisia') +
      createGame('Mexico', '13:00', 'Polonia') +
      createGame('França', '16:00', 'Australia')
  ) +
  createCard(
    '23/11',
    'QUARTA',
    createGame('Marrocos', '07:00', 'Croácia') +
      createGame('Alemanha', '10:00', 'Japão') +
      createGame('Espanha', '13:00', 'Costa Rica') +
      createGame('Belgica', '16:00', 'Canadá')
  ) +
  createCard(
    '24/11',
    'QUINTA',
    createGame('Suiça', '07:00', 'Camarões') +
      createGame('Uruguai', '10:00', 'Coreia do Sul') +
      createGame('Portugal', '13:00', 'Gana') +
      createGame('Brazil', '16:00', 'Sérvia')
  ) +
  createCard(
    '25/11',
    'SEXTA',
    createGame('Gales', '07:00', 'Irã') +
      createGame('Catar', '10:00', 'Senegal') +
      createGame('Holanda', '13:00', 'Equador') +
      createGame('Inglaterra', '16:00', 'Estados Unidos')
  ) +
  createCard(
    '26/11',
    'SÁBADO',
    createGame('Tunisia', '07:00', 'Australia') +
      createGame('Polonia', '10:00', 'Arabia Saudita') +
      createGame('França', '13:00', 'Dinamarca') +
      createGame('Argentina', '16:00', 'Mexico')
  ) +
  createCard(
    '27/11',
    'DOMINGO',
    createGame('Japão', '07:00', 'Costa Rica') +
      createGame('Belgica', '10:00', 'Marrocos') +
      createGame('Croácia', '13:00', 'Canadá') +
      createGame('Espanha', '16:00', 'Alemanha')
  ) +
  createCard(
    '28/11',
    'SEGUNDA',
    createGame('Camarões', '07:00', 'Sérvia') +
      createGame('Coreia do Sul', '10:00', 'Gana') +
      createGame('Brazil', '13:00', 'Suiça') +
      createGame('Portugal', '16:00', 'Uruguai')
  ) +
  createCard(
    '29/11',
    'TERÇA',
    createGame('Equador', '07:00', 'Senegal') +
      createGame('Holanda', '10:00', 'Catar') +
      createGame('Irã', '13:00', 'Estados Unidos') +
      createGame('Gales', '16:00', 'Inglaterra')
  ) +
  createCard(
    '30/11',
    'QUARTA',
    createGame('Tunisia', '07:00', 'França') +
      createGame('Australia', '10:00', 'Dinamarca') +
      createGame('Polonia', '13:00', 'Argentina') +
      createGame('Arabia Saudita', '16:00', 'Mexico')
  ) +
  createCard(
    '01/12',
    'QUINTA',
    createGame('Croácia', '07:00', 'Belgica') +
      createGame('Canadá', '10:00', 'Marrocos') +
      createGame('Japão', '13:00', 'Espanha') +
      createGame('Costa Rica', '16:00', 'Alemanha')
  ) +
  createCard(
    '02/11',
    'SEXTA',
    createGame('Coreia do Sul', '07:00', 'Portugal') +
      createGame('Gana', '10:00', 'Uruguai') +
      createGame('Sérvia', '13:00', 'Suiça') +
      createGame('Camarões', '16:00', 'Brazil')
  )