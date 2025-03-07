const inPrice = document.getElementById("inPrice");
const btCheck = document.getElementById("btCheck");
const outCheck = document.getElementById("outCheck");

function calcStore() {
  const price = Number(inPrice.value);

  const inCash = price * 0.9;

  const prorated = price / 3;

  outCheck.textContent = `In Cash: ${inCash.toFixed(2)}. In prorated is 3x $: ${prorated.toFixed(2)}`;
}

btCheck.addEventListener("click", calcStore);
