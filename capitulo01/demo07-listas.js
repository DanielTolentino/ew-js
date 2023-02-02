const minhaLista = []
const minhaListaDeTarefas = [
    'mandar e-mail',
    'colocar comida para o gato',
    'limpar o quarto'
]

/* console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4]) */

// quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

console.log(minhaListaDeTarefas.length)

// adicionar item 
/* '.push' sempre adiciona o item no FINAL do array */
minhaListaDeTarefas.push('instalar linux no computador')
console.log(minhaListaDeTarefas)

// remover último da lista
const ultimoDaLista = minhaListaDeTarefas.pop();
console.log(
    `Último item da lista era: "${ultimoDaLista}"`, '\n', 
    minhaListaDeTarefas
    )

const primeiro = minhaListaDeTarefas.shift()
console.log(
    `Primeiro item da lista era: "${primeiro}"`, '\n',
    minhaListaDeTarefas
)

minhaListaDeTarefas.splice(1, 1)
console.log(minhaListaDeTarefas)


const itens = [
    1, 'computador', 0.22
]

// verificar o tipo do array
console.log(itens);
console.log(typeof(itens));


// verificar se é array da forma correta
console.log("É um array?", Array.isArray(itens))

//ordenar
const numeros = [ 124, 3123, 5124, 249, 12]
console.log(numeros.sort())

//juntar dois arrays
const outraLista = numeros.concat([ 15, 412, 415])
console.log(outraLista)

// juntar arrays em uma string
console.log(itens.join('-'))

//verificar o index do item no array
//retorna -1 quando o item não é encontrado na lista (evaluate to true, pode dar probema)
const index = itens.indexOf('computador')
console.log(itens[index])