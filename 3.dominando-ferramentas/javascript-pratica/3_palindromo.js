/* 3. Verificar se uma String é um Palíndromo

Uma palavra ou frase é considerada um palíndromo quando pode ser lida da mesma forma de trás para frente, ignorando espaços e acentos

Instruções:
    Remova espaços e transforme tudo para letras minúsculas antes da verificação.
    Retorne true se for palíndromo e false caso contrário.

Exemplo de Entrada e Saída:

input: "arara"
output: true

input: "A base do teto desaba"
output: true

input: "xpto"
output: false
*/
const word1 = 'arara'
const word2 = 'A base do teto desaba'
const word3 = 'xpto'

console.log('input: ' + word1)
console.log('output: ' + isPalindrome(word1))

console.log('input: ' + word2)
console.log('output: ' + isPalindrome(word2))

console.log('input: ' + word3)
console.log('output: ' + isPalindrome(word3))

function isPalindrome(word) {
    let wordAux = word.toLowerCase().replaceAll(' ', '')
    let reversedWord = wordAux.split('').reverse().join('');
    return wordAux === reversedWord
}
