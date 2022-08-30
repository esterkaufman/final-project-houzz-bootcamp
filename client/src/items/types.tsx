export type Item = IItem

export interface IItem {
  name: string;
  id: number;
  price: number,
}

export class ItemClass {
  name: string;
  id: number;
  price: number

  constructor(name: string, id: number, price: number) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
}


