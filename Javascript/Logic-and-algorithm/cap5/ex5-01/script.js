const inputPatient = document.getElementById("inPatient");
const buttonAdd = document.getElementById("btAdd");
const buttonUrgency = document.getElementById("btUrgency");
const buttonAttend = document.getElementById("btAttend");
const outResult = document.getElementById("outResult");
const outArray = document.getElementById("outArray");

const patient = inputPatient.value;

const patientsArray = [
  "1. Lucas",
  "2. Gilberto",
  "3. Warley",
  "4. Sergio",
  "5. Marconde",
];

function addPatient() {
  const pushPatient = patientsArray.push(patient);
}

function addUrgencyPatient() {
  const patientUrgency = patientsArray.splice(indexOf(patient), 1)[0];
}

function attendPatient() {
  if()
}

