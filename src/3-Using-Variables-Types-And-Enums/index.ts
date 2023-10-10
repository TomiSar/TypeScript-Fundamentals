// string, number, boolean, array, undefined, null, any

let firstName: string = 'Tomi';
let lastName: string | null = 'Sarjamo';
let age: number;
age = 43;
let hasPurchased = true;

console.log(`Hello ${firstName} ${lastName} you are ${age} years old.`);

let productName: string[] = ['Basketball', 'Skateboard', 'Pizza', 'Coca-Cola'];

for (let i = 0; i < productName.length; i++) {
  console.log(`${i}. ${productName[i]}`);
}

let petCount: number[] = [];
console.log(petCount);
petCount.push(5);
console.log(petCount);

lastName = null;
age = 45;
console.log(lastName, age, hasPurchased);

// Using Enums
enum ProductType {
  Sports = 1,
  Art = 2,
  Music = 3,
  Food = 10,
  Beverage = 11,
}

let pt = ProductType.Art;
if (pt === ProductType.Art) {
  console.log('Product genre is ART');
} else {
  console.log('Product genre is not ART');
}
