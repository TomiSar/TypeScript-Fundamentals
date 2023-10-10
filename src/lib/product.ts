import { Product } from './interfaces';

// This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
abstract class ProductBase implements Product {
  constructor(public id: number, public name: string, public icon: string) {}
  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

// // Implemented using classes for test purpose
// class ProductBase {
//   // constructor
//   //#region constructor
//   constructor(public id: number, public name: string, public icon: string) {}
//   //#endregion

//   //#region functions
//   getId(): number {
//     throw new Error('Not implemented');
//   }

//   getName(): string {
//     throw new Error('Not implemented');
//   }

//   getIcon(): string {
//     throw new Error('Not implemented');
//   }

//   validate(): boolean {
//     throw new Error('Not implemented');
//   }
//   //#endregion
// }

// export class FoodProduct extends ProductBase {
//   //#region functions
//   getId(): number {
//     return this.id;
//   }

//   getName(): string {
//     return `${this.name}`;
//   }

//   getIcon(): string {
//     return `${this.icon}`;
//   }

//   validate(): boolean {
//     return !!this.id && !!this.name && !!this.icon;
//   }
//   //#endregion functions
// }

// class SportGoodsProduct extends ProductBase {
//   //#region constructor
//   constructor(
//     id: number,
//     name: string,
//     icon: string,
//     public desription: string,
//   ) {
//     super(id, name, icon);
//   }
//   //#endregion
// }

// let sgp = new SportGoodsProduct(
//   11,
//   'Football',
//   'football.jpg',
//   'Fifa official football',
// );
// console.log(sgp);
