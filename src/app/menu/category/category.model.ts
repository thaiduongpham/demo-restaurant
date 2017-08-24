import { BackendService } from '../../shared/backend.service';

interface CategoryJSON {
  name: string;
  short_name: string;
  special_instructions: string;
}

export class Category {
  constructor(
    public name: string,
    public imageUrl: string,
    public shortName: string,
    public description?: string
  ) {
    this.description = description || '';
  }

  // Category.fromJSON()
  static fromJSON(json: CategoryJSON): Category {
    const imageUrl = this.getCategoryImageUrl(json.short_name);
    return new Category(json.name, imageUrl, json.short_name, json.special_instructions);
  }

  static getCategoryImageUrl(shortName: string): string {
    return `${BackendService.BASE_URL}images/menu/${shortName}/${shortName}.jpg`;
  }

}
