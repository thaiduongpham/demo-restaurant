import { Menu } from '../menu.model';

export class MenuDetailModel extends Menu {
  description: string;
  price: number;
  big_price: number;
  code: string;

  constructor(name: string, imageUrl: string, price: number, big_price: number, code: string, description?: string) {
    super(name, imageUrl);
    this.price = price;
    this.big_price = big_price;
    this.code = code;
    this.description = description;
  }

}
