const inExpiDate = document.querySelector("#inExpiDate");
const inAccount = document.querySelector("#inAccount");
const btCalc = document.querySelector("#btCalc");
const outInterest = document.querySelector("#outInterest");
const outTotal = document.querySelector("#outTotal");
const reset = document.querySelector("#reser");

const fireRate = 2 / 100;
const interestRate = 0.33 / 100;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

btCalc.addEventListener("click", () => {
  const expiDate = inExpiDate.value;
  const account = Number(inAccount.value);

  const today = new Date();
  const expiry = new Date();

  const part = expiDate.split("-");
  expiry.setDate(Number(part[2]));
  expiry.setMonth(Number(part[1]));
  expiry.setFullYear(Number(part[0]));

  const delay = today - expiry;
  let penalty = 0;
  let interest = 0;

  if (delay > 0) {
    const days = delay / 864000000;
    penalty = account * fireRate;
    interest = account * interestRate * days;
  }
});
