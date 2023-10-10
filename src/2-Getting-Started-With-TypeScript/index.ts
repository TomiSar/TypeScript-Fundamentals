let number1: number = 103.45;
let number2: number = 5.895;
const sum: number = number1 + number2;
const result: string = `The sum: ${number1} + ${number2} = ${sum}`;

enum Operation {
  Sum,
  Diff,
  Mul,
  Div,
}

function calulateResult(
  num1: number,
  num2: number,
  selection: Operation,
): number | undefined {
  switch (selection) {
    case Operation.Sum:
      return num1 + num2;
    case Operation.Diff:
      return num1 - num2;
    case Operation.Mul:
      return num1 * num2;
    case Operation.Div:
      if (num2 === 0) {
        throw new Error('Division with zero is not allowed!');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid selection use (Sum, Diff, Mul or Div)');
  }
}

const resultSumNum: number | undefined = calulateResult(
  number1,
  number2,
  Operation.Sum,
);
const resultSumStr: string = `The sum of numbers: ${number1} + ${number2} = ${resultSumNum?.toFixed(
  3,
)}`;
const resultDiffNum: number | undefined = calulateResult(
  number1,
  number2,
  Operation.Diff,
);
const resultDiffStr: string = `The difference of numbers: ${number1} - ${number2} = ${resultDiffNum?.toFixed(
  3,
)}`;
const resultMulNum: number | undefined = calulateResult(
  number1,
  number2,
  Operation.Mul,
);
const resultMulStr: string = `The multiplication of numbers: ${number1} * ${number2} = ${resultMulNum?.toFixed(
  3,
)}`;
const resultDivNum: number | undefined = calulateResult(
  number1,
  number2,
  Operation.Div,
);
const resultDivStr: string = `The division of numbers: ${number1} / ${number2} = ${resultDivNum?.toFixed(
  3,
)}`;

const inputNumStr: string = `Input numbers from user ${number1} and ${number2}`;
const inputNumbers = document.querySelector('#inputNumbers');

if (inputNumbers) {
  inputNumbers.innerHTML = inputNumStr;
}

const outputSum = document.querySelector('#outputSum');
const outputDiff = document.querySelector('#outputDiff');
const outputMul = document.querySelector('#outputMul');
const outputDiv = document.querySelector('#outputDiv');

if (outputSum) {
  outputSum.innerHTML = resultSumStr;
}
if (outputDiff) {
  outputDiff.innerHTML = resultDiffStr;
}
if (outputMul) {
  outputMul.innerHTML = resultMulStr;
}
if (outputDiv) {
  outputDiv.innerHTML = resultDivStr;
}

// function calculate(
//   num1: number,
//   num2: number,
//   selection: string,
// ): number | undefined {
//   switch (selection) {
//     case 'sum':
//       return num1 + num2;
//     case 'diff':
//       return num1 - num2;
//     case 'mul':
//       return num1 * num2;
//     case 'div':
//       if (num2 !== 0) {
//         return num1 / num2;
//       } else {
//         throw new Error('Division by zero is not allowed.');
//       }
//     default:
//       throw new Error(
//         "Invalid selection. Please choose 'sum', 'diff', 'mul', or 'div'.",
//       );
//   }
// }

// // Example usage:
// const res1 = calculate(10, 5, 'sum'); // Returns 15
// console.log(res1);

// const res2 = calculate(10, 5, 'div'); // Returns 2
// console.log(res2);

// const res3 = calculate(10, 0, 'div'); // Throws an error: "Division by zero is not allowed."
// console.log(res3);

// let firstName: string = 'Tomi';
// let lastName: string | null = 'Sarjamo';
// let age: number;
// age = 43;
// let hasPurchased = true;

// console.log(`Hello ${firstName} ${lastName} you are ${age} years old.`);

// let productName: string[] = ['Basketball', 'Skateboard', 'Pizza', 'Coca-Cola'];

// for (let i = 0; i < productName.length; i++) {
//   console.log(`${i}. ${productName[i]}`);
// }

// let petCount: number[] = [];
// console.log(petCount);
// petCount.push(5);
// console.log(petCount);

// lastName = null;
// age = 45;
// console.log(lastName, age, hasPurchased);

// // Using Enums
// enum ProductType {
//     Sports,
//     Art,
//     Food,
//     Beverage
// }

// let pt == ProductType.Sports;
// if (pt === ProductType.Sports) {
//     console.log('Found sports product type.');
// } else {
//     console.log('Not Found sports product type.');
// }
