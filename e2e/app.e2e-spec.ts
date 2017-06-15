import { NewCliPage } from './app.po';

describe('new-cli App', () => {
  let page: NewCliPage;

  beforeEach(() => {
    page = new NewCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
