import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Submenu } from './submenu/submenu.model';
import { MenuDetailModel } from './menu-detail/menu-detail.model';

@Injectable()
export class MenuService {

  submenuChanged = new Subject<Array<string>>();

  private submenuList: Array<Submenu> = [
    new Submenu('Lunch', 'http://www.davidchuschinabistro.com/images/menu/L/L.jpg', 'lunch', `Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.`),
    new Submenu('Soup', 'http://www.davidchuschinabistro.com/images/menu/A/A.jpg', 'soup'),
    new Submenu('Appetizers', 'http://www.davidchuschinabistro.com/images/menu/B/B.jpg', 'appetizers'),
    new Submenu('Chefs Recommendations', 'http://www.davidchuschinabistro.com/images/menu/SP/SP.jpg', 'chefs-recommendations'),
    new Submenu('Chicken', 'http://www.davidchuschinabistro.com/images/menu/C/C.jpg', 'chicken'),
    new Submenu('Beef', 'http://www.davidchuschinabistro.com/images/menu/F/F.jpg', 'beef'),
    new Submenu('Veal', 'http://www.davidchuschinabistro.com/images/menu/V/V.jpg', 'veal'),
    new Submenu('Duck', 'http://www.davidchuschinabistro.com/images/menu/DK/DK.jpg', 'duck'),
    new Submenu('Vegetables', 'http://www.davidchuschinabistro.com/images/menu/VG/VG.jpg', 'vegetables'),
    new Submenu('Curry', 'http://www.davidchuschinabistro.com/images/menu/CU/CU.jpg', 'curry'),
    new Submenu('Noodles (Lo Mein)', 'http://www.davidchuschinabistro.com/images/menu/NL/NL.jpg', 'nuddles'),
    new Submenu('Mei Fan (Very Fine Noodles)', 'http://www.davidchuschinabistro.com/images/menu/NF/NF.jpg', 'mei-fan'),
    new Submenu('Pan Fried Noodles', 'http://www.davidchuschinabistro.com/images/menu/PF/PF.jpg', 'pan-fried-noodles'),
    new Submenu('Fried Rice', 'http://www.davidchuschinabistro.com/images/menu/FR/FR.jpg', 'fried-rice'),
    new Submenu('Chow Mein', 'http://www.davidchuschinabistro.com/images/menu/CM/CM.jpg', 'chow-mein'),
    new Submenu('Egg Foo Young', 'http://www.davidchuschinabistro.com/images/menu/FY/FY.jpg', 'egg-foo-young'),
    new Submenu('Side Orders', 'http://www.davidchuschinabistro.com/images/menu/SO/SO.jpg', 'side-orders'),
    new Submenu('Desserts', 'http://www.davidchuschinabistro.com/images/menu/DS/DS.jpg', 'desserts'),
    new Submenu('Dinner Combo', 'http://www.davidchuschinabistro.com/images/menu/D/D.jpg', 'dinner-combo', 'Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.'),
    new Submenu('Sushi', 'http://www.davidchuschinabistro.com/images/menu/SR/SR.jpg', 'sushi', 'Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness.')
  ];

  // chicken food
  private chicken_01 = new MenuDetailModel('Orange Chicken', 'http://www.davidchuschinabistro.com/images/C1.jpg', 10.95, 14.95, 'C1', 'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra');
  private chicken_02 = new MenuDetailModel('General Tso\'s Chicken', 'http://www.davidchuschinabistro.com/images/C2.jpg', 10.95, 14.95, 'C2', 'chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra');
  private chicken_03 = new MenuDetailModel('White Meat Chicken with String Bean', 'http://www.davidchuschinabistro.com/images/C3.jpg', 10.95, 14.95, 'C3', 'white meat chicken sauteed with string beans and soy sauce');
  private chicken_04 = new MenuDetailModel('White Meat Chicken with Eggplant In Garlic Sauce', 'http://www.davidchuschinabistro.com/images/C4.jpg', 10.95, 14.95, 'C4', 'white meat chicken, string beans, waterchestnuts, mushrooms, and eggplant, in garlic sauce');
  private chicken_05 = new MenuDetailModel('', 'http://www.davidchuschinabistro.com/images/C5.jpg', 10.95, 14.95, 'C5', 'diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra');
  private chicken_06 = new MenuDetailModel('Chicken Cashewnuts', 'http://www.davidchuschinabistro.com/images/C6.jpg', 10.95, 14.95, 'C6', 'white meat chicken in a clear white sauce sauteed with mixed vegetables');
  private chicken_07 = new MenuDetailModel('White Meat Chicken with Fresh Vegetables', 'http://www.davidchuschinabistro.com/images/C7.jpg', 10.95, 14.95, 'C7', 'chunks of chicken, breaded and deep-fried with a sesame seed sauce');
  private chicken_08 = new MenuDetailModel('Sesame Chicken', 'http://www.davidchuschinabistro.com/images/C8.jpg', 10.95, 14.95, 'C8', 'white meat chicken sauteed with broccoli, mushrooms, and baby corn in Hunan sauce');
  private chicken_09 = new MenuDetailModel('Hunan Chicken', 'http://www.davidchuschinabistro.com/images/C9.jpg', 10.95, 12.25, 'C9', 'white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce');
  private chicken_10 = new MenuDetailModel('Szechuan Chicken', 'http://www.davidchuschinabistro.com/images/C10.jpg', 10.95, 14.95, 'C10', 'diced chicken sauteed with peanuts, and celery in delicious kung pao sauce; white meat by request: for pint $1 extra, for large $2 extra');
  private chicken_11 = new MenuDetailModel('White Meat Chicken with Garlic Sauce', 'http://www.davidchuschinabistro.com/images/C11.jpg', 10.95, 14.95, 'C11', 'chicken sauteed with string beans, mushrooms, and waterchestnuts in garlic sauce');
  private chicken_12 = new MenuDetailModel('Dry Shredded Chicken', 'http://www.davidchuschinabistro.com/images/C12.jpg', 10.95, 14.95, 'C12', 'white meat chicken lightly breaded and fried until crip, then sauteed with celery and carrots in a special chef\'s sauce');
  private chicken_13 = new MenuDetailModel('Moo Shu Chicken', 'http://www.davidchuschinabistro.com/images/C13.jpg', 10.95, 14.95, 'C13', 'white meat chicken sauteed with shredded cabbage, mushrooms and eggs, then wrapped with pancake and delicious plum sauce');
  private chicken_14 = new MenuDetailModel('Moo Goo Gau Chicken', 'http://www.davidchuschinabistro.com/images/C14.jpg', 10.95, 16.95, 'C14', 'white meat chicken sauteed with broccoli, snow peas, mushrooms, and waterchestnuts in a white sauce');
  private chicken_15 = new MenuDetailModel('Sweet and Sour Chicken', 'http://www.davidchuschinabistro.com/images/C15.jpg', 10.95, 14.95, 'C15', 'white meat chicken, breaded and fried with some green pepper, onion, and pineapples');
  private chicken_16 = new MenuDetailModel('Chicken with Broccoli', 'http://www.davidchuschinabistro.com/images/C16.jpg', 10.95, 15.95, 'C16', 'white meat chicken sauteed with broccoli in brown sauce');
  private chicken_17 = new MenuDetailModel('Lemon Chicken', 'http://www.davidchuschinabistro.com/images/C17.jpg', 10.95, 14.95, 'C17', 'white meat chicken breaded and fried, served with lemon sauce on the side');
  private chicken_18 = new MenuDetailModel('Eight Treasure Chicken', 'http://www.davidchuschinabistro.com/images/C18.jpg', 10.95, 14.95, 'C18', 'diced chicken sauteed with mushrooms, waterchestnuts, celery, peas, carrots, peanuts, and cahsews in a chef\'s sauce; white meat by request: for pint $1 extra, for large $2 extra');
  private chicken_19 = new MenuDetailModel('Salt & Pepper Chicken', 'http://www.davidchuschinabistro.com/images/C19.jpg', 11.95, 15.95, 'C19', 'chunks of chicken breaded and fried, the sauteed with green peppers');

  private chickenList = [
    this.chicken_01,
    this.chicken_02,
    this.chicken_03,
    this.chicken_04,
    this.chicken_05,
    this.chicken_06,
    this.chicken_07,
    this.chicken_08,
    this.chicken_09,
    this.chicken_10,
    this.chicken_11,
    this.chicken_12,
    this.chicken_13,
    this.chicken_14,
    this.chicken_15,
    this.chicken_16,
    this.chicken_17,
    this.chicken_18,
    this.chicken_19
  ];

  private lunchList = [
    this.chicken_01,
    this.chicken_02,
    this.chicken_03,
    this.chicken_04,
    this.chicken_05,
    this.chicken_06,
    this.chicken_07,
    this.chicken_14,
    this.chicken_15,
    this.chicken_16,
    this.chicken_17,
    this.chicken_18,
    this.chicken_19
  ];

  private defaultList = [
    this.chicken_01,
    this.chicken_02,
    this.chicken_03,
    this.chicken_15,
    this.chicken_16,
    this.chicken_17,
    this.chicken_18,
    this.chicken_19
  ];

  constructor() { }

  getSubmenuList(): Array<Submenu> {
    return this.submenuList;
  }

  getSubmenuDetailListBySlug(slug: string) {
    switch (slug) {
      case 'lunch':
        return this.lunchList;
      case 'chicken':
        return this.chickenList;
      default:
        return this.defaultList;
    }
  }

}
