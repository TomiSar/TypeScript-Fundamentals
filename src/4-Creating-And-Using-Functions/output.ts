import { productsURL } from '../lib';

const prefix = '🔥';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

const number1: number = 15;
const number2: number = 7;
const number3: number = 105;
const number4: number = 22;

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

// // Fetch all products
// const products = getProducts();
// console.log(products);

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, icon, name }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

// Run all code samples
runSamples();

function runSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`Product id:${id} and name:${name}`);
  }
  displayProductInfo(1234, 'MacBook Pro');

  console.log(`${prefix} function declaration`);
  console.log(
    `Sum: ${number1} + ${number2} = ${addNumberDeclaration(number1, number2)}`,
  );

  function addNumberDeclaration(num1: number, num2: number): number {
    const sum: number = num1 + num2;
    return sum;
  }

  const addNumberExpression = function (num1: number, num2: number) {
    const sum: number = num1 + num2;
    return sum;
  };
  console.log(`${prefix} function expression`);
  console.log(
    `Sum: ${number3} + ${number4} = ${addNumberExpression(number3, number4)}`,
  );

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
    {
      id: 40,
      name: 'Apple',
      icon: 'fas fa-apple',
    },
    {
      id: 50,
      name: 'Tiramisu',
      icon: 'fas fa-tiramisu',
    },
    {
      id: 60,
      name: 'Skateboard',
      icon: 'fas fa-skateboard',
    },
    {
      id: 100,
      name: 'Lollipop',
      icon: 'fas fa-lollipop',
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((product) => product.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    // return sampleProducts.find(function (product) {
    //   return id === product.id;
    // });
    return sampleProducts.find((product) => id === product.id);
  }

  const getProductById2 = (id: number): ProductType | undefined =>
    sampleProducts.find((product) => id === product.id);

  console.log(`${prefix} return ProductTypes`);
  console.log(getProductById(103)); //undefined
  for (let i = 10; i <= 50; i += 10) {
    console.table(getProductById(i));
  }

  console.table(getProductById2(60));

  // Several ways of implement this
  function displayProducts(products: ProductType[]): void {
    const productNames = products.map((product) => {
      // const name = product.name;
      // return name.charAt(0).toUpperCase() + name.slice(1);
      const name = product.name.toLowerCase();
      return name;
    });
    const message = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(message);
  }

  displayProducts(sampleProducts);

  // async/await function

  // *** async function getProducts()

  // Arrow functions

  // see function displayProducts()
  // and layoutProducts()
  // and getProductById()

  // Optional parameters

  const getRandomIntFromParam = (max: number) =>
    Math.floor(Math.random() * max);
  function createProduct(name: string, icon?: string): ProductType {
    const id = getRandomIntFromParam(1000);
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} Optional parameters`);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  const { floor, random } = Math;
  const getRandomInt = (max: number = 1000) => floor(random() * max);

  // Default parameters
  // modify getRandomInt()
  function createProductWithDefaults(
    name: string,
    icon: string = 'generic-fruit.jpg',
  ): ProductType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} Default parameters`);
  pineapple = createProductWithDefaults('pineapple', 'pine-apple.jpg');
  mango = createProductWithDefaults('mango');
  console.log(pineapple, mango);

  // *** updateOutput()
  // Rest parameters

  function buildAddress(
    street: string,
    city: string,
    ...restOfAddress: string[]
  ) {
    const address = `${street}, ${city} ${restOfAddress.join(' ')}`;
    return address;
  }

  const someAddress = buildAddress(
    '1 lois lane',
    'smallville',
    'apt 101', // rest arg[0]
    'area 51', // rest arg[1]
    'mystery country', // rest arg[2]
  );

  console.log(`${prefix} Rest parameters`);
  console.log(someAddress);

  function createPersonInfo(
    firstName: string,
    lastName: string,
    ...restOfInfo: string[]
  ) {
    const person = `${firstName} ${lastName} ${restOfInfo.join(' ')}`;
    return person;
  }

  const randomPerson = createPersonInfo(
    'Chuck',
    'Norris',
    'Sensei of Judo',
    'chuck.norris@sensei.com',
    'age 82',
    'United States',
    'California',
  );

  console.log(`${prefix} Rest parameters`);
  console.log(randomPerson);

  // Destructuring parameters
  function displayProductsDestructuringPars({ id, name }: ProductType): void {
    console.log(`${prefix} Destructuring parameters`);
    console.log(`Product id=${id} and name=${name}`);
  }
  // const product: ProductType = { id: 100, name: 'Lollipop' };
  // displayProductsDestructuringPars(product);

  const prod = getProductById(100);
  if (prod) {
    displayProductsDestructuringPars(prod);
  }
}
