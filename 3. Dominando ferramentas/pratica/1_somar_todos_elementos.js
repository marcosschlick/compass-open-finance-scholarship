/* 1. Somar Todos os Elementos de um Array Unidimensional

Escreva uma função que recebe um array de números e retorna a soma de todos os seus elementos.

Instruções:
- Retorne a soma total dos elementos do array.
- Uma mensagem de erro deve ser retornada quando um valor invalido for enviado.

Exemplo de Entrada e Saída:

input: [1, 2, 3, 4, 5]
output: 15

input: [-1, 10, 20]
output: 29

input: [45, 5, "xpto"]
output: "valor invalido detectado"
*/

const array1 = [1, 2, 3, 4, 5]
const array2 = [-1, 10, 20]
const array3 = [45, 5, "xpto"]

console.log('input: ' + array1)
console.log('output: ' + sumAllElements(array1))

console.log('input: ' + array2)
console.log('output: ' + sumAllElements(array2))

console.log('input: ' + array3)
console.log('output: ' + sumAllElements(array3))

function sumAllElements(array) {
    let total = 0
    for (const num of array) {
        if(isNaN(num)) {
            return 'valor invalido detectado'
        }
        total += num
      }
    return total
}
