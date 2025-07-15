const prompt = require("prompt-sync")();

console.log("Enter the amount you want to withdraw or enter 0 to go back");

const withdrawals = [];

do {
  const value = Number(prompt("Withdrawal R$: "));
  if (value === 0) break;

  withdrawals.push(value);
  if (value % 10 === 0) {
    console.log("Withdraw successfully completed");
  } else {
    console.log("Erro... Invalid Value (It must be a multiple of 10)");
  }
} while (true);

console.log("\nValid Withdraws");
console.log("-".repeat(40));

const validWithdraws = withdrawals.filter(
  (withdrawals) => withdrawals % 10 == 0,
);

for (const withdrawal of withdrawals) {
  console.log(withdrawal.toFixed(2));
}

console.log("-".repeat(40));
const totalWithdraw = validWithdraws.reduce(
  (total, withdrawal) => total + withdrawal,
  0,
);
console.log(
  `Total of Withdraws: R$ (valid withdraws): ${totalWithdraw.toFixed(2)}`,
);

console.log("-".repeat(40));
const invalidWithdraws = withdrawals.length - validWithdraws.length;
console.log(
  `\nNumber of withdraws attempts (invalid withdraws): ${invalidWithdraws}`,
);
