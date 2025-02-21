function calculator() {
  //call html elements
  const inName = document.getElementById('inName');
  const rbMale = document.getElementById('rbMale');
  const rbFemale = document.getElementById('rbFemale');
  const inHeight = document.getElementById('inHeight');
  const outAnswer = document.getElementById('outAnswer');

  //get elements reference
  const name = inName.value;
  const isMale = rbMale.checked;
  const isFemale = rbFemale.checked;
  const calcHeight = parseFloat(inHeight.value);

  // check that the name and gender are selected
  if (name == '' || (isMale == false && isFemale == false)) {
    alert('Please, inform name and gender...');
    inName.focus();
  }

  // if weight is 0 or NaN
  if (calcHeight == 0 || isNaN(calcHeight)) {
    alert('Please, inform the correctly weight...');
    inHeight.focus();
  }

  if (isMale) {
    const calcMale = 22 * Math.pow(calcHeight, 2);
    return (outAnswer.textContent =
      name + ' your ideal weight is ' + calcMale.toFixed(2) + ' kg');
  }
  if (isFemale) {
    const calcFemale = 21 * Math.pow(calcHeight, 2);
    return (outAnswer.textContent =
      name + ' your ideal weight is ' + calcFemale.toFixed(2) + ' kg');
  }
}

function cleanFields() {
  document.getElementById('inName').value = '';
  document.getElementById('rbMale').checked = false;
  document.getElementById('rbFemale').checked = false;
  document.getElementById('inHeight').value = '';
  document.getElementById('outAnswer').textContent = '';
}

const btCalcule = document.getElementById('btCalcule');

const btClean = document.getElementById('btClean');

btClean.addEventListener('click', cleanFields);

btCalcule.addEventListener('click', calculator);
