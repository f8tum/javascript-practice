// logical operators are used to combine boolean values
//      AND = &&
//      OR = ||
//      NOT = !

const age = 25;
const hasID = true;
const isStudent = false;

// AND: both conditions must be true
if (age >= 18 && hasID)
  console.log("You can enter the club.");

// OR: at least one condition must be true
if (age < 18 || isStudent)
  console.log("You get a discount.");

// NOT: inverts the boolean
if (!isStudent)
  console.log("You are not a student.");