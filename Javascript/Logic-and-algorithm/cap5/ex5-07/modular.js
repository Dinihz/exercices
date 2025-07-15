const prompt = require("prompt-sync")();

function collectWithdrawals() {
  const withdrawals = [];

  console.log("Enter the amount you want to withdraw or enter 0 to go back.");

  while (true) {
    const value = Number(prompt("Withdrawal R$: "));
    if (value === 0) break;

    withdrawals.push(value);

    if (value % 10 === 0) {
      console.log("Withdrawal successfully completed.");
    } else {
      console.log("Error... Invalid value (must be a multiple of 10).");
    }
  }

  return withdrawals;
}
