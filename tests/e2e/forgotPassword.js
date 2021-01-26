const { dsaUsernameTandem, dsaPasswordTandem } = require('../../global');

module.exports = {
  'User Submits Password Reset Form'(browser) {
    const loginPage = browser.page.LoginPage();
    const loginForm = loginPage.section.loginForm;
    const forgotPasswordPage = browser.page.ForgotPasswordPage();
    const resetForm = forgotPasswordPage.section.resetForm;
    loginPage.loadPage();
    loginForm.click('@forgotPasswordLink');
    resetForm
      .assert.containsText('@forgotPasswordTitle', 'Forgot your password?', 'Successful Navigation to Password Reset Page')
      .setValue('@emailInput', dsaUsernameTandem)
      .click('@resetSubmitBtn')
      .assert.containsText('@forgotPasswordTitle', 'Email sent!', 'Email Sent');
  },
  'User Accesses Email'(browser) {
    const forgotPasswordPage = browser.page.ForgotPasswordPage();
    const gmail = forgotPasswordPage.section.gmail;
    gmail.accessGmail();
  },
  'User Resets Password'(browser) {
    const forgotPasswordPage = browser.page.ForgotPasswordPage();
    const newPasswordForm = forgotPasswordPage.section.newPasswordForm;
    newPasswordForm.switchTab();
    newPasswordForm
      .assert.containsText('@changePasswordTitle', 'Change your password', 'Successful Navigation to Change Password Form')
      .setValue('@emailInput', dsaUsernameTandem)
      .setValue('@passwordInput', dsaPasswordTandem)
      .setValue('@passwordConfirmInput', dsaPasswordTandem)
      .waitForElementVisible('@saveButton')
      .click('@saveButton')
      .assert.containsText('@changePasswordTitle', 'Success!', 'Successsfully Changed Password');
  },

};
