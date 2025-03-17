
## 1. Factory Functions
```js
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    saudacao() {
      return `Olá, sou ${this.nome}`
    }
  }
}
```

## 2. Constructors
```js
function Carro(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
  this.info = () => `${marca} ${modelo}`
}

const meuCarro = new Carro('Ford', 'Ka')
```
