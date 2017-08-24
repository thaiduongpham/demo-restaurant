
export class MenuDetailModel {
  name: string;
  imageUrl: string;
  shortName: string;
  description: string;
  priceSmall: number;
  priceLarge: number;
  smallPortionName: string;
  largePortionName: string;

  constructor(name: string, imageUrl: string, short_name: string, price_small: number, price_large: number, small_portion_name: string, large_portion_name: string, description?: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.shortName = short_name;
    this.description = description;
    this.priceSmall = price_small;
    this.priceLarge = price_large;
    this.smallPortionName = small_portion_name;
    this.largePortionName = large_portion_name;
  }

}
