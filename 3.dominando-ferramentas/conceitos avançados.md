
## 1. Template Strings
```js
const nome = 'Maria'
const mensagem = `Olá ${nome},
Seja bem-vinda ao sistema!
Data: ${new Date().toLocaleDateString()}`
```

## 2. Métodos Úteis
```js
// Math
Math.floor(Math.random() * 100) // Número inteiro 0-99

// String
'JavaScript'.startsWith('Java') // true
'JavaScript'.slice(0,4) // 'Java'

// Conversão
JSON.parse('{"nome":"João"}') // Objeto
JSON.stringify({nome: 'João'}) // String
```

## 3. Garbage Collection
- Gerenciamento automático de memória
- Objetos não referenciados são removidos
- Não requer manipulação manual
