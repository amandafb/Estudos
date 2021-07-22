/*
08) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function divisivelPor3(num){
    if(num <= 0){
        console.log('Este número não é um número inteiro!! ')
    } else{
        if(num % 3 == 0){
            console.log('é divisível por 3')
            return true
        } else{
            console.log('não é divisível por 3')
            return false
        }
    }
}

console.log(divisivelPor3(7))