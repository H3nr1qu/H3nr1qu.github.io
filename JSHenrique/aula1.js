//alert('ola mundo')
//console.log('testando console.')
//document.getElementById('titulo').innerHTML = 'olá pessoal'
//document.write('testando algo;')

// = atribui um valor a uma variavel
// * multiplicaçao
// /divisao
// % resto da divisao
// === comparador de igualdade com tipagem
// == comparador de igualdade sem tipagem
// !== comparador de desigualdade com tipagem
// != comparador de desigualdade sem tipagem
// && logico And
// || logico OR

contagem = 0

function teste(){
    
 valor= parseInt(document.getElementById("valor").value)
 contagem += valor
 document.getElementById('resultado').innerHTML = contagem


}