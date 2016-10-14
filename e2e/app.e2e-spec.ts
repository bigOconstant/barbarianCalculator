import { RageCalculatorPage } from './app.po';

describe('rage-calculator App', function() {
  let page: RageCalculatorPage;

  beforeEach(() => {
    page = new RageCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
