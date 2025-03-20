
## 1. Declarações
```js
// Function Declaration
function soma(a, b) {
  return a + b
}

// Arrow Function
const multiplica = (a, b) => a * b
```

## 2. Parâmetros e Escopo
```js
function media(...nums) { // Rest parameters
  return nums.reduce((a,b) => a + b) / nums.length
}

// Parâmetros default
function juros(valor, taxa = 0.1) {
  return valor * (1 + taxa)
}
```
