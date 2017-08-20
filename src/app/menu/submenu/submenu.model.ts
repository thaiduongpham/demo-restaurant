import { Menu } from '../menu.model';

export class Submenu extends Menu {
  slug: string;
  description: string;

  constructor(name: string, imageUrl: string, slug: string, description?: string) {
    super(name, imageUrl);
    this.slug = slug;
    this.description = description;
  }

}
