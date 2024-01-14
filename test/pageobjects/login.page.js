const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
  
   get HellowWorld () {
        return $$('#finish');
    }

async waitUntilArrayNotEmpty(webElementArray, timeout = 15000, timeoutMsg = '') {
		await browser.waitUntil(
			async () => await webElementArray.length >= 1,
			{ timeout, timeoutMsg }
  );
};

 }

module.exports = new LoginPage();
