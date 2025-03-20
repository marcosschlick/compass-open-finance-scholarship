/* 4. Codificar o Jogo "Pedra, Papel, Tesoura"

Implemente um jogo simples de "Pedra, Papel, Tesoura" onde o usuário joga contra o computador.

Instruções:
    O usuário escolhe "pedra", "papel" ou "tesoura".
    O computador escolhe aleatoriamente uma dessas opções.
    O jogo segue as regras clássicas:
        Pedra ganha de Tesoura
        Tesoura ganha de Papel
        Papel ganha de Pedra

Exemplo de Entrada e Saída:

input: "pedra"
*cpu escolheu tesoura*
output: Você ganhou!

input: "papel"
*cpu escolheu papel*
output: Empate!

input: "tesoura"
*cpu escolheu pedra*
output: Você perdeu!
*/


function play(jogada) {
    const computer = getComputador()
    const player = jogada

    document.getElementById('computer').src = getImg(computer)
    document.getElementById('player').src = getImg(player)
    document.getElementById('resultado').innerHTML = comparePlay(player, computer)
}


function getComputador() {
    computer = Math.floor((Math.random() * 3) + 1)
    switch(computer) {
        case 1: 
            return 'pedra' 
        case 2: 
            return 'papel'
        case 3: 
            return 'tesoura'
  }
}

function comparePlay(player, computer) {

    if(player === computer) {
        return 'empate'
    } else if ( (player === 'pedra' && computer === 'tesoura') || 
                (player === 'papel' && computer === 'pedra') || 
                (player === 'tesoura' && computer === 'papel')) 
                {
        return 'você ganhou'
    } else {
        return 'computador ganhou'
    }
}

function getImg(play) {
    switch(play) {
        case 'tesoura': 
            return 'img/scissors.png' 
        case 'pedra': 
            return 'img/stone.png' 
        case 'papel': 
            return 'img/paper.png' 
  }
}