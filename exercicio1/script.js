/*# Exercício 1
a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
b) Declare uma função que imprima a tabuada do 6. Chame esta função.
c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/

function nome (nome){
    console.log ("Ola", nome);
}
nome("rogerio");
 
// function tabuada(num) {
//     for (let i = 1; i <= 10; ++i) {
//         tabuada = ''
//         tabuada += `${num}x${i} = ${num * i} \n`    
    
//     } 
//     return tabuada 
    
// }

// let res1 = tabuada(6)
// console.log(res1)

let tabuada = (num) => {
    tabuada = ''
    for(let cont = 1; cont <= 10; cont++){
        tabuada += `${num}x${cont} = ${num*cont }\n`
        
    }
    return tabuada
}

let resultadoTab = tabuada(6)
console.log(resultadoTab)