const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
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
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails('a','b')), true);
    assert.strictEqual(productDetails('a','b').length, 2);
    assert.strictEqual(typeof productDetails('a','b')[0], 'object')
    assert.strictEqual(typeof productDetails('a','b')[1], 'object');
    assert.notDeepStrictEqual(productDetails('a','b')[0], productDetails('a','b')[1]);
    assert.strictEqual(productDetails('a', 'b')[0].details.productId.slice(-3), '123');
    assert.strictEqual(productDetails('a', 'b')[1].details.productId.slice(-3), '123');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
