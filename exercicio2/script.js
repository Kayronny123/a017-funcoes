// # Exercício 2
// Declare e chame as funções abaixo:
// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// c) Uma função que receba um número e imprima se ele é par ou não
// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function soma  (n1, n2) {
     n1 + n2 
   }

const n1 = Number(prompt('Digite um número'))
const n2 = Number(prompt('Digite um número'))
const cidade1 = prompt("Digite o nome de uma cidade")

console.log(`A soma dos numero é ${n1} + ${n2} = ${n1+n2}`)
console.log(`A o primeiro numero é maior ou igual que o segundo?   ${n1 >= n2}`)
console.log(`O primeiro numero é par ${n1 % 2 == 0}`)
console.log(`Sua cidade é ${cidade1} e ela possui ${cidade1.length} caracteres`)
