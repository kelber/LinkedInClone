import { KelberstuchiPage } from './app.po';

describe('kelberstuchi App', () => {
  let page: KelberstuchiPage;

  beforeEach(() => {
    page = new KelberstuchiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
