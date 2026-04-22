// string, number, boolean, array, undefined, null, any

let firstName: string = 'Hannu';
let lastName: string | null = 'Karpo';
let age: number = 75;
let hasPurchased = true;

console.log(`Hello ${firstName} ${lastName} you are ${age} years old.`);

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: 'Skateboard', price: 89.99 },
  { name: 'Basketball', price: 29.99 },
  { name: 'Pizza', price: 9.99 },
  { name: 'Coca-Cola', price: 1.99 },
  { name: 'Guitar', price: 199.99 },
];

console.log(`Available products at the store: ${products.length}`);
for (let i = 0; i < products.length; i++) {
  console.log(
    `Product ${i + 1}: ${products[i].name}, Price: ${products[i].price}€`,
  );
}

let productName: string[] = [
  'Skateboard',
  'Basketball',
  'Pizza',
  'Coca-Cola',
  'Guitar',
];

console.log(`\nAvailable products at the store: ${productName.length}`);
for (let i = 0; i < productName.length; i++) {
  console.log(`Product name ${i + 1}: ${productName[i]}`);
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
