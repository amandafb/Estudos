/*
07) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/
// let pontuacao = "10 20 20 8 25 3 0 30 1"

function comparar(pontuacao){
    let listaPontuacao = pontuacao.split(' ')
    let melhorDesempenho = listaPontuacao[0]
    let piorDesempenho = listaPontuacao[0]
    let records = 0
    let piorJogoNum = 0

    for(i = 1; i < listaPontuacao.length; i++){ // percorre o array de pontos
        if(listaPontuacao[i] > melhorDesempenho){ // se a pontuação atual for maior que o melhor desempenho até então
            melhorDesempenho = listaPontuacao[i] // essa pontuação assume a posição de melhor desempenho
            records++; // soma 1 a quantidade de records do jogador
        } else if(listaPontuacao[i] < piorDesempenho){ // se a pontuação atual for menor que o pior desempenho até então
            piorDesempenho = listaPontuacao[i] // essa pontuação assume a posição de pior desempenho
            piorJogoNum = i + 1 // pega o numero daquele jogo em que o desempenho foi o pior do momento (soma 1 porque o array começa em 0)
        }
    }
    return [records, piorJogoNum]
}

console.log(comparar("30 40 20 4 51 25 42 38 56 0"));
