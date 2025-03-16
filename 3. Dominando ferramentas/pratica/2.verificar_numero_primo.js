/* 2. Verificar se um Número é Primo

Crie uma função que verifica se um número é primo.

Instruções:
    Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo.
    Retorne true se for primo e false caso contrário.
    Uma mensagem de erro deve ser retornada quando um valor invalido for enviado.

Exemplo de Entrada e Saída:

input: 7
output: true

input: 10
output: false

input: "xpto"
output: "valor invalido detectado"
*/
const num1 = 7
const num2 = 10
const num3 = 'xpto'
const num4 = 1
const num5 = 143413467
const num6 = 13
const num7 = 3

console.log('input: ' + num1)
console.log('output: ' + isPrime(num1))

console.log('input: ' + num2)
console.log('output: ' + isPrime(num2))

console.log('input: ' + num3)
console.log('output: ' + isPrime(num3))

console.log('input: ' + num4)
console.log('output: ' + isPrime(num4))

console.log('input: ' + num5)
console.log('output: ' + isPrime(num5))

console.log('input: ' + num6)
console.log('output: ' + isPrime(num6))

console.log('input: ' + num7)
console.log('output: ' + isPrime(num7))

function isPrime(number) {
    if(isNaN(number)) {
        return 'valor invalido detectado'
    }
    let count = 0
    for (i = 1; i <= number; i++) {
        if(number % i == 0){
            count++
        }
    }
    if (count != 2) {
        return false
    } else {
        return true
    }
}
