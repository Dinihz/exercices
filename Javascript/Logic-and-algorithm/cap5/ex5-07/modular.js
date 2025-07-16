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

function showValidWithdrawals(valid) {
  console.log("\nValid Withdrawals");
  console.log("-".repeat(40));
  valid.forEach((value) => {
    console.log(`R$ ${value.toFixed(2)}`);
  });
}

function showSummary(valid, totalAttempts) {
  const totalWithdrawn = valid.reduce((sum, value) => sum + value, 0);
  const invalidCount = totalAttempts - valid.length;

  console.log("-".repeat(40));
  console.log(`Total of Valid Withdrawals: R$ ${totalWithdrawn.toFixed(2)}`);
  console.log(`Invalid Withdrawal Attemps: ${invalidCount}`);
}
const allWithdrawals = collectWithdrawals();
const validWithdrawals = allWithdrawals.filter((value) => value % 10 === 0);

showValidWithdrawals(validWithdrawals);
showSummary(validWithdrawals, allWithdrawals.length);
