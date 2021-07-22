/* 
12) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        // return false
        return console.log('Ano inválido')
    } else if (ano % 400 == 0) {
        // return true
        console.log(`O ano de ${ano} é bissexto`)
    } else if (ano % 100 == 0) {
        // return false
        console.log(`O ano de ${ano} não é bissexto`)
    } else if (ano % 4 == 0) {
        // return true
        console.log(`O ano de ${ano} é bissexto`)
    } else {
        // return false
        console.log(`O ano de ${ano} não é bissexto`)
    }
}

calcularAnoBissexto(2019)