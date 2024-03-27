// var phones = ["Iphone", "Sansung", "Motorolla"]


// phones.pop("Xiaomi")



// for (var number = 0; number <= 10; number++){
//     console.log(number)
// }


// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// // Retorna de 0 a 9 no console

// var phones = ["Iphone", "Sansung", "Motorolla"]

// for (var iten = 0; iten < phones.length; iten++) {
//     if(phones[iten] === "Sansung") {
//     }
// }

// var fruta = ["banana", "ameixa", "acerola", "laranja"]

// fruta.forEach(function(frutas, index, array) {
//     console.log(frutas, index, array)
// })

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// var anoscopaBrasil = [1959, 1962, 1970, 1994, 2002]
// var ano = anoscopaBrasil.length
// anoscopaBrasil.forEach(function(index) {
//     console.log(`O brasil ganhou a copa do mundo ${ano}x`) 
// })


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// for (var fruta = 0; fruta < frutas.length; fruta++) {
//     if(frutas[fruta] === "Uva") {
//         break
//     }
//     console.log(frutas[fruta])
// }
// var ultimaFruta = frutas[frutas.length - 1];
// console.log("Última fruta:", ultimaFruta);

// var idade = 14;
// var podeviajarSolo = (idade >= 16) ? "Autorizado Viajar pelo territorio nacinal" : "Viajar apenas acompanhado de um maior de idade"
// console.log(podeviajarSolo)



// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
// var scroll = 1000;
// scroll += 500

// // Atribua true para a variável darCredito,
// // caso o cliente possua carro e casa.
// // E false caso o contrário.
// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito = (possuiCarro && possuiCarro)


// Por qual motivo o código abaixo retorna com erros?
// {
//     var cor = 'preto';
//     const marca = 'Fiat';
//     let portas = 4;
//     console.log(cor, marca, portas);
//   }
  
//   // Como corrigir o erro abaixo?

  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(y) {
    const dois = 2
    return y / dois;
  }
  
  console.log(somarDois(2))
  console.log(dividirDois(10))



//   // O que fazer para total retornar 500?
  const numero = 50;

  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  