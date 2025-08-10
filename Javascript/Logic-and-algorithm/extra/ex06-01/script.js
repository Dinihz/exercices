const frm = document.querySelector("form");
const resp = document.querySelector("span");
const inFruta = document.querySelector("#inFruta");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruta = inFruta.value.toUpperCase();
  let resposta = "";

  for (const letra of fruta) {
    if (letra == fruta.charAt(0)) {
      resposta += fruta.charAt(0);
    } else {
      resposta += " _ ";
    }
  }

  resp.innerText = resposta;
  inFruta.value = "*".repeat(fruta.lenght);
});
