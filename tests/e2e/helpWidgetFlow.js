module.exports = {
  '@tags': ['parallel'],
  'User Accesses Help Widget'(browser) {
    const loginPage = browser.page.loginPage();
    const helpWidget = browser.page.helpWidget();
    loginPage.loadPage();
    helpWidget.loadWidget();
    helpWidget.accessHelpWidget();
  },
  'User Searches for "Login" help'(browser) {
    const helpWidget = browser.page.helpWidget();
    helpWidget
      .searchArticles('login', browser);
  },
  'User Contacts Support'(browser) {
    const helpWidget = browser.page.helpWidget();
    helpWidget.contactSupport();
  },
};
