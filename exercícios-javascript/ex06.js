/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, taxa, tempo){
    let juros = capital * (taxa / 100) * tempo
    let valorFinal = juros + capital
    console.log(valorFinal.toFixed(2))
}

function jurosComposto(capital, taxa, tempo){
    let valorFinal = capital * (1 + taxa/100) ** tempo
    console.log(valorFinal.toFixed(2))
}

jurosSimples(1500, 4, 3)
jurosComposto(6000, 3, 6)