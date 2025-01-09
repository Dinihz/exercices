"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 3 - Adicione um evento de keyup ao formulário
const form = document.getElementById("#form");
form === null || form === void 0 ? void 0 : form.addEventListener("keyup", handInput);
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
