"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        return data;
    });
}
function displayCursos(cursos) {
    const container = document.getElementById("cursos-container");
    if (!container)
        return;
    cursos.forEach((curso) => {
        const cursoElement = document.createElement("div");
        cursoElement.textContent = `${curso.nome} (${curso.horas} horas)`;
        cursoElement.style.color = curso.nivel === "iniciante" ? "blue" : "red";
        container.appendChild(cursoElement);
    });
}
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const cursos = yield fetchCursos();
    displayCursos(cursos);
}));
