// get html elements
const inputPatient = document.getElementById("inPatient");
const buttonAdd = document.getElementById("btAdd");
const buttonUrgency = document.getElementById("btUrgency");
const buttonAttend = document.getElementById("btAttend");
const outResult = document.getElementById("outResult");
const outArray = document.getElementById("outArray");

const patientsArray = [];

// display the array in the html
function showArray() {
  outArray.innerHTML = patientsArray
    .map((p, i) => `${i + 1} - ${p}`) // using map to transform each item in an array into a nubered string
    .join("<br>"); // join the transformed array into a single string, separating each item with a line break (<br>)
  inputPatient.value = "";
  inputPatient.focus();
}

// add new patient to the end of the array
function addPatient() {
  const patient = inputPatient.value;
  if (patient === "") return;
  patientsArray.push(patient); // using push to go to the array
  showArray();
}

// move the patient to the top if it's urgent
function addUrgencyPatient() {
  const patient = inputPatient.value;
  if (patient === "") return;
  patientsArray.unshift(patient); // using unshift to add to the top
  showArray();
}

// remove the first patient from the array and display as in attendance
function attendPatient() {
  if (patientsArray.length === 0) {
    outResult.textContent = `No patient in the queue`;
    return;
  }

  const nextPatient = patientsArray.shift(); // use shift to remove the first patient from the array
  outResult.textContent = `In attendance ${nextPatient}`;
  showArray();
}

// add event listeners to the buttons
buttonAdd.addEventListener("click", addPatient);
buttonUrgency.addEventListener("click", addUrgencyPatient);
buttonAttend.addEventListener("click", attendPatient);
