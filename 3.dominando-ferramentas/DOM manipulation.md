
## 1. Seleção e Modificação
```js
// Seleção
const elemento = document.getElementById('id')
const elementos = document.querySelectorAll('.classe')

// Modificação
elemento.textContent = 'Novo texto'
elemento.style.color = 'blue'
elemento.classList.add('destaque')
```

## 2. Eventos
```js
const btn = document.querySelector('button')
btn.addEventListener('click', function() {
  console.log('Botão clicado!')
})
```
