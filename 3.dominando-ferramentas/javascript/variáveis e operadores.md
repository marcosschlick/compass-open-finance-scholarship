
## 1. Introdução ao JavaScript
- Adiciona interatividade às páginas web
- Execução client-side (navegador) ou server-side (Node.js)
- Inclusão em HTML: `<script src="arquivo.js"></script>`

## 2. Variáveis e Tipos de Dados
```js
// Declaração
let nome = 'Marcos' // Mutável
const PI = 3.14     // Imutável

// Tipos Primitivos
typeof 'Texto'    // string
typeof 42         // number
typeof true       // boolean
typeof undefined  // undefined
typeof null       // object (especial)

// Objetos
const pessoa = {
  nome: 'Ana',
  idade: 30
}

// Arrays
const frutas = ['maçã', 'banana']
```

## 3. Operadores
### Aritméticos
```js
5 + 3   // Soma
2 ** 4  // Exponenciação (16)
num++   // Pós-incremento
```

### Comparação
```js
'5' == 5   // true (coerção)
'5' === 5  // false (tipos diferentes)
```

### Lógicos
```js
true && false  // AND
true || false  // OR
!true          // NOT
```

### Ternário
```js
const status = idade >= 18 ? 'Adulto' : 'Menor'
```
