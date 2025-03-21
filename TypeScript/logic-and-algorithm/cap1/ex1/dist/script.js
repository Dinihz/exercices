"use strict";
const frm = document.querySelector("form");
const outName = document.querySelector("h3");
const outDuration = document.querySelector("h4");
frm === null || frm === void 0 ? void 0 : frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = (frm === null || frm === void 0 ? void 0 : frm.inTitle).value;
    const duration = Number((frm === null || frm === void 0 ? void 0 : frm.inDuration).value);
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    outName.textContent = title;
    outDuration.textContent = `${hours}h and ${minutes}min`;
});
