/* 
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor){
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`resultado: ${resultado}, resto: ${resto}`)
}

divisao(5,2)