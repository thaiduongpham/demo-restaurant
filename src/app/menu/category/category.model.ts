
// interface CategoryJSON {
//   name: string;
//   imageUrl: string;
//   shortName: string;
//   special_instructions: string;
// }

export class Category {
  name: string;
  imageUrl: string;
  shortName: string;
  description: string;

  constructor(name: string, imageUrl: string, shortName: string, description?: string) {
    this.name = name;    
    this.imageUrl = imageUrl;
    this.shortName = shortName;
    this.description = description;
  }

  // static fromJSON(json: CategoryJSON) {
  //   const category = Object.create(Category.prototype);
  //   return Object.assign(category, json, {
  //     imageUrl: json.
  //   });
  // }

}
