// # Exercício 3
// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function soma(n1, n2) {
    return n1 + n2
}

const n1 = Number(prompt('Digite um número'))
const n2 = Number(prompt('Digite um número'))


console.log(`A soma dos numero é ${n1} + ${n2} = ${n1 + n2}`)
console.log(`A multiplicação dos numero é  ${n1} * ${n2} = ${n1 * n2}`)
console.log(`A divisão dos numero é  ${n1} / ${n2} = ${n1 / n2}`)
console.log(`A subtração dos numero é ${n1} - ${n2} = ${n1 - n2}`)