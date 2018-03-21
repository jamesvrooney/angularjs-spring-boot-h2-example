import { PortalAppPage } from './app.po';

describe('portal-app App', () => {
  let page: PortalAppPage;

  beforeEach(() => {
    page = new PortalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
