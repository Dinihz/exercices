const inPasswd = document.querySelector("#inPassword");
const btCheck = document.querySelector("#btCheck");
const result = document.querySelector("#result");

btCheck.addEventListener("click", () => {
  const passwd = inPasswd.value.trim();
  const errors = [];

  if (passwd.length < 8 || passwd.length > 15) {
    errors.push("Must contain at least 1 number");
  }

  let haveNumber = passwd.match(/[0-9]/);
  if (!haveNumber) {
    errors.push("Must contain at least 1 number");
  }

  let haveLow = passwd.match(/[a-z]/);
  if (!haveLow) {
    errors.push("Must contain at least 1 lowercase letter");
  }

  let haveUpper = passwd.match(/[A-Z]/g);
  let upperOK = haveUpper && haveUpper.length >= 2;
  if (!upperOK) {
    errors.push("Must contain at least 2 uppercase letters");
  }

  let haveSimbols = passwd.match(/[^a-zA-Z0-9]/);
  if (!haveSimbols) {
    errors.push("Must contain at least 1 sybol");
  }

  if (errors.length === 0) {
    result.textContent = "Valid Password!";
  } else {
    result.textContent = "Invalid Pasword:\n- " + errors.join("\n- ");
  }
});
