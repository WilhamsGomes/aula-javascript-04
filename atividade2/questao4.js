
/*4)      Criar um array com o nome de 5 cidades.

a)       Exibir, no console, em ordem crescente os times que estão no array.

b)      Remover a cidade que está no início do array.

c)       Remover a cidade que está no final do array.

d)      Exibir, no console, em ordem crescente os times que estão no array. */


var cidades = ["Recife", "Salvador", "Fortaleza", "Alagoas", "Rio de Janeiro"]

cidades.sort();
console.log(cidades)

cidades.shift()

cidades.pop()

console.log(cidades)