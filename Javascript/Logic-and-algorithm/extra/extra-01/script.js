const inAge = document.getElementById("inAge");
const btCheck = document.getElementById("btCheck");
const outAge = document.getElementById("outAge");

function getAge() {
  const valueAge = Number(inAge.value.trim());

  if (isNaN(valueAge) || valueAge < 1) {
    alert("Please, enter a valid age (1 or greater)...");
    inAge.value = "";
    inAge.focus();
    return;
  }

  if (valueAge <= 12) {
    outAge.textContent = `Your categorie is Children`;
  } else if (valueAge <= 17) {
    outAge.textContent = `Your categorie is Youth`;
  } else if (valueAge <= 59) {
    outAge.textContent = `Your categorie is Adult`;
  } else {
    outAge.textContent = `Your categorie is Senior`;
  }
}

btCheck.addEventListener("click", getAge);
