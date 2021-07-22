/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 multiplicação e divisão desses valores.
*/

function calcular(a,b){
    let soma = a + b
    let subtacao = a - b
    let multiplicacao = a * b
    let divisao = a / b
    console.log(`soma: ${soma}, subtração: ${subtacao}, multiplicação: ${multiplicacao}, divisão: ${divisao}`)
}
//outra forma
function calcular2(a,b){
    console.log(`soma: ${ a + b}, subtração: ${a - b}, multiplicação: ${a * b}, divisão: ${a / b}`)
}

calcular(5,2)
calcular2(5,2)

