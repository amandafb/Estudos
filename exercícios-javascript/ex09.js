/*
09) Faça uma função que calcule o fatorial de um número.
*/
     function fatorial(numero) {
        let fatorial = 1;

        if (numero == 0) {
           console.log('O fatorial de 0! é 1');
        } else if (numero >= 1) {
            for (let i = 1; i <= numero; i++) {
                fatorial *= i;
            }
            console.log(`O fatorial de ${numero}! é ${fatorial}`);
        } else {
            console.log('Não é possível calcular o fatorial de números negativos');
        }
    }

    fatorial(0);
    fatorial(3);
    fatorial(10);