const prompt = require("prompt-sync")();

// 1. Collect data of the students
function getStudents() {
  const students = [];
  console.log("Inform students, then type 'and' to finish");

  while (true) {
    const name = prompt("Name: ");
    if (name === "and") break;

    const test = Number(prompt("Test Value: "));
    students.push({ name, test });

    console.log("Ok, Student registered.");
  }

  return students;
}

// 2. find the highest score
function getHighestScore(students) {
  return students.reduce(
    (max, student) => (student.test > max ? student.test : max),
    0,
  );
}

// 3. filter students with the highest score
function getHighlights(students, score) {
  return students.filter((student) => student.test === score);
}

// 4. print results
function printResults(students) {
  console.log("-".repeat(40));

  const highest = getHighestScore(students);
  console.log(`Highest test score: ${highest}`);

  if (highest >= 7) {
    const highlights = getHighlights(students, highest);
    console.log("Highlight students:");
    highlights.forEach((student) => {
      console.log(`- ${student.name}`);
    });
  } else {
    console.log("There are no highlight students in the class");
  }
}
