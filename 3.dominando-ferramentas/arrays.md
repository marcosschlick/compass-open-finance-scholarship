
## 1. Manipulação Básica
```js
const numeros = [1, 2, 3]

// Adição/Remoção
numeros.push(4)    // [1,2,3,4]
numeros.unshift(0) // [0,1,2,3,4]
numeros.splice(2, 1) // Remove 1 item do índice 2

// Busca
numeros.includes(2)  // true
numeros.find(n => n > 2) // 3
```

## 2. Métodos Importantes
```js
// Transformação
numeros.map(n => n * 2)  // [2,4,6]
numeros.filter(n => n % 2 === 0) // [2]

// Redução
numeros.reduce((acc, n) => acc + n, 0) // 6

// Ordenação
numeros.sort((a,b) => b - a) // [3,2,1]
```

