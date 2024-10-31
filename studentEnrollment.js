const DSA = [];
const PL = [];
const Networks = [];

let currentSubject = DSA;

while (true) {
  console.log("Select an operation:");
  console.log("1. Enroll");
  console.log("2. Unenroll");
  console.log("3. Select Another Subject");
  console.log("4. Exit");

  const choice = prompt("Enter your choice (1-4):");

  if (choice === "1") { 
    const subjectChoice = prompt("Select a subject (DSA, PL, Networks):");
    const studentName = prompt("Enter student name:");

    if (subjectChoice === "DSA") {
      DSA.push(studentName);
    } else if (subjectChoice === "PL") {
      PL.push(studentName);
    } else if (subjectChoice === "Networks") {
      Networks.push(studentName);
    } else {
      console.log("Invalid subject choice.");
    }
  } else if (choice === "2") { 
    console.log("Currently enrolled students in " + currentSubject.toString());
    const studentName = prompt("Enter student name to un-enroll:");
    const index = currentSubject.indexOf(studentName);
    if (index !== -1) {
      currentSubject.splice(index, 1);
      console.log(studentName + " has been un-enrolled.");
    } else {
      console.log(studentName + " is not enrolled in this subject.");
    }
  } else if (choice === "3") {
    const subjectChoice = prompt("Select a subject (DSA, PL, Networks):");
    if (subjectChoice === "DSA") {
      currentSubject = DSA;
    } else if (subjectChoice === "PL") {
      currentSubject = PL;
    } else if (subjectChoice === "Networks") {
      currentSubject = Networks;
    } else {
      console.log("Invalid subject choice.");
    }
  } else if (choice === "4") { 
    console.log("Enrolled students:");
    console.log("DSA:", DSA.toString());
    console.log("PL:", PL.toString());
    console.log("Networks:", Networks.toString());
    break;
  } else {
    console.log("Invalid choice.");
  }
}
