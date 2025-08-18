const presentYear = new Date().getFullYear();

const age = prompt(`How many years are you celebrating in ${presentYear}`);

const birthYear = presentYear - age;

alert(`Ohhh... So you were born in ${birthYear}`);
