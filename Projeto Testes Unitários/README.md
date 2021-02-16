Lista de requisitos

Implemente a função average

A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo average.spec.js contém os testes para average já implementados. Implemente a função no arquivo src/average.js de forma que ela atenda aos testes propostos.

Implemente os casos de teste para a função numbers

A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário. Essa função já está implementada no arquivo src/numbers.js. Escreva os testes para essa função para garantir que a implementação de numbers está correta.

Implemente a função vqv

Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

`'Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`

Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado. O arquivo vqv.spec.js contém os testes para vqv já implementados.

Implemente a função no arquivo src/vqv.js de forma que ela atenda aos testes propostos.

Implemente os casos de teste para a função circle

A função circle recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna undefined. Essa função já está implementada no arquivo src/circle.js. Escreva os testes para essa função para garantir que a implementação de circle está correta.

Implemente a função createStudent

A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves: (1) name, contendo o nome passado como parâmetro; (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada. O arquivo createStudent.spec.js contém os testes para createStudent já implementados. Implemente a função no arquivo src/createStudent.js de forma que ela atenda aos testes propostos.

Implemente os casos de teste para a função productDetails

A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
Essa função já está implementada no arquivo src/productDetails.js. Escreva os testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.

Implemente a função objCalculator

Desenvolva um objeto calculator que possui quatro chaves:

add;
mult;
div;
sub.
Para cada uma delas atribua uma função que realiza a respectiva operação. A função deve receber dois inteiros e retornar um inteiro. Os resultados das divisões devem sempre ser arredondados para baixo. O arquivo objCalculator.spec.js contém os testes para objCalculator já implementados. Implemente a função no arquivo src/objCalculator.js de forma que ela atenda aos testes propostos.

Implemente a função myCounter

A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função myCounter para que a função retorne o array correto. O arquivo myCounter.spec.js contém os testes para myCounter já implementados. Implemente a função no arquivo src/myCounter.js de forma que ela atenda aos testes propostos.

