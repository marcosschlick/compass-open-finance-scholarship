
## 1. Condicionais
```js
// If-Else
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}

// Switch
switch(mês) {
  case 1: 
    console.log('Janeiro')
    break
  default:
    console.log('Mês inválido')
}
```

## 2. Loops
```js
// For Clássico
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// While
let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// For...of (Arrays)
for (const fruta of frutas) {
  console.log(fruta)
}
```
