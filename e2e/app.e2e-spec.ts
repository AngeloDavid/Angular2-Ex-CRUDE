import { Examen1BPage } from './app.po';

describe('examen1-b App', () => {
  let page: Examen1BPage;

  beforeEach(() => {
    page = new Examen1BPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
