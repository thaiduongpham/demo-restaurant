import { DemoRestaurantPage } from './app.po';

describe('demo-restaurant App', () => {
  let page: DemoRestaurantPage;

  beforeEach(() => {
    page = new DemoRestaurantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
