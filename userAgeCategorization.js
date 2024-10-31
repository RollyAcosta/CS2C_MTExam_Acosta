function categorizeAge(age) {
  if (age < 5) {
    return "Toddler";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 19) {
    return "Teenager";
  } else if (age <= 35) {
    return "Young Adult";
  } else if (age <= 60) {
    return "Middle-Aged";
  } else {
    return "Senior";
  }
}

const userAge = 19;
const ageCategory = categorizeAge(userAge);
console.log(`The user is a ${ageCategory}.`);
