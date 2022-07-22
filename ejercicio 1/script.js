/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀*/



/* DATA 1

const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJhon = massJhon / (heightJhon * heightJhon);

const markHigerBMI = bmiMark > bmiJhon;

console.log(bmiMark, bmiJhon, markHigerBMI);
*/

/* DATA 2


const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJhon = massJhon / heightJhon ** 2;

const markHigerBMI = bmiMark > bmiJhon;

console.log(bmiMark, bmiJhon, markHigerBMI);
*/
