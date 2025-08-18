const today = new Date();

const tomorrow = new Date();

const day = tomorrow.getDate();

tomorrow.setDate(day + 1);

console.log(`Today: ${today}\nTomorrow: ${tomorrow}`);
