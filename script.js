// Função que converte o número binário para o decimal

function BintoDec() {
    var number_0 = document.getElementById('binario') // Obtem o input do usuário
    var number = number_0.value; // Obtem o valor do input
    var toString = number.toString().split('').reverse().join(''); // Transforma o valor do input em uma String e depois inverte as suas posições

    var total = 0
    var double = 1;
    var error = 0;



    if (number.length <= 8) { // Confere o total de digitos da String e da uma mensagem de erro caso esta for maior que 8 dígitos.

        for (var i = 0; toString.length > i; i++) { //Fórmula que testa cada algoritmo para garantir que esse é 0 ou 1,                           
            if (parseInt(toString[i]) == 0 || parseInt(toString[i]) == 1) { // multiplica seu valor pelo incremento e guarda o resultado na variável total.
                var decimal = parseInt(toString[i]) * double;
                total += decimal;
                double = double * 2;
            } else {
                error = 1;
            }
        }
        // Caso um algoritmo for diferente de 0 ou 1 o valor de erro muda, assim ocorre a mudança da mensagem final.
        if (error == 0) {
            resposta = document.getElementById('resultado');
            final = "O valor é " + total;
            resposta.innerHTML = final;
        } else {
            resposta = document.getElementById('resultado');
            final = "Digite apenas 0 e 1";
            resposta.innerHTML = final;
        }


    } else {
        resposta = document.getElementById('resultado');
        final = "Digite um número com no máximo oito digitos";
        resposta.innerHTML = final;
    }

}