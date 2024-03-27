
// const img = document.querySelector("img");

// function callback(event) {
//     console.log(event)
// }

// img.addEventListener("click",)

// // const imagesList = document.querySelector(".summary-list");

// function callbackList(event) {
//     console.log(event.currentTarget);
//     console.log(event.target)
//     console.log(event.type)
// }



// function handleLinkExterno(event) {
//     event.preventDefault();
//     console.log(this)
// }


// linkExterno.addEventListener("click,", handleLinkExterno)

// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//     console.log(event.currentTarget);
// }

// imgs.forEach((img) => {
//     img.addEventListener("click", handleImg)
// })


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linkInternos = document.querySelectorAll('a[href^="#"');

// function handleLink(event) {
//     event.preventDefault();
//     linkInternos.forEach((link) => {
//         link.classList.remove("ativo")
//     })
//     event.currentTarget.classList.add("ativo")
// }

// linkInternos.forEach((link) => {
//     link.addEventListener('click', handleLink)
// })


// Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event) {
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener("click", handleElemento)
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function handleClickT(event) {
//     if(event.key === 't') {
//         console.log("clicou T")
//     }
// }