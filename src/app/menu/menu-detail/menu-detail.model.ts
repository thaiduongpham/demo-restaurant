import { BackendService } from './../../shared/backend.service';

interface MenuDetailJSON {
  name: string;
  short_name: string;
  description: string;
  price_small: number;
  price_large: number;
  small_portion_name: string;
  large_portion_name: string;
}

export class MenuDetail {

  constructor(
    public name: string,
    public shortName: string,
    public description: string,
    public priceSmall: number,
    public priceLarge: number,
    public smallPortionName: string,
    public largePortionName: string,
    public imageUrl: string) { }

  static fromJSON(json: MenuDetailJSON) {
    const imageUrl = this.getMenuItemImageUrl(json.short_name);
    return new MenuDetail(
      json.name,
      json.short_name,
      json.description,
      json.price_small,
      json.price_large,
      json.small_portion_name,
      json.large_portion_name,
      this.getMenuItemImageUrl(json.short_name)
    );
  }

  static getMenuItemImageUrl(shortName: string): string {
    return `${BackendService.BASE_URL}images/${shortName}.jpg`;
  }

}
