const frm = document.querySelector("form");
const inModel = document.querySelector("#inModel");
const inPrice = document.querySelector("#inPrice");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("btList");
const btFilter = document.querySelector("#btFilter");
const tPromo = document.querySelector("#btPromo");
const resp = document.querySelector("#pre");
const cars = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const model = frm.inModel.value;
  const price = Number(frm.inPrice.value);

  cars.push({ model, price });
  frm.inModel.value = "";
  frm.inPrice.value = "";
  inModel.focus();

  frm.btList.dispatchEvent(new Event("click"));
});

frm.btList.addEventListener("click", () => {
  if (cars.length == 0) {
    alert("dont have a cars in the list");
    return;
  }

  const list = cars.reduce(
    (acumulated, car) =>
      acumulated + car.model + " - R$: " + car.price.toFixed(2) + "/n",
    "",
  );
  resp.innerText = `List of the cadastred cars\n${"-".repeat(40)}\n${list}`;
});

frm.btFilter.addEventListener("click", () => {
  const max = Number(prompt("What max value the client must pay?"));

  if (max == 0 || isNaN(max)) {
    return;
  }

  const carsFilter = cars.filter((car) => car.price <= max);

  if (carsFilter.length == 0) {
    alert("Dont have a any price less then or equal to that requested");
    return;
  }

  let list = "";
  for (const car of carsFilter) {
    list += `${car.model} - R$: ${car.price.toFixed(2)}\n`;
  }
  resp.innerHTML = `Cars even R$: ${max.toFixed(2)}\n${"-".repeat(40)}\n${list}`;
});

frm.btPromol.addEventListener("click", () => {
  const discount = Number(prompt("What percentage discount: "));
  if (discount == 0 || isNaN(discount)) {
    return;
  }
  let list = "";
  for (const car of carsDesc) {
    list += `${car.model} - R$: ${discount}%\n${"-".repeat(40)}\n${list}`;
  }
  resp.innerHTML = `Cars with discount: ${discount}%\n${list}`;
});
