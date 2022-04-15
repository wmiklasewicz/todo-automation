import { t, ClientFunction } from 'testcafe';

const getURL = ClientFunction(() => window.location.href);

class GeneralHelper {
  /**
 * Get url link
 * @example
 * import GeneralHelper from '../page-objects/helpers/general-helper';
 * await GeneralHelper.getUrl();
 */
  async getUrl() {
    t.ctx.genericUrl = await getURL();
  }

  /**
 * Verify url link
 * @param {String} link - link to be verified
 * @example
 * import GeneralHelper from '../page-objects/helpers/general-helper';
 * await GeneralHelper.checkURL('https://todomvc.com/examples/vanillajs/');
 */
  async checkURL(link) {
    await t
      .expect(getURL()).contains(link);
  }

  /**
 * Take screenshot and add to the screenshots folder
 * @param {Boolean} isFullPage - screen resoultion for screenshot, by default fullPage, please notice that chrome doesn't support that option
 * @example
 * import GeneralHelper from '../page-objects/helpers/general-helper';
 * await GeneralHelper.takeScreenshot(isFullPage = false);
 */
  async takeScreenshot(isFullPage = true) {
    await t
      .takeScreenshot({
        path: `screenshots/${Date.now()}.png`,
        fullPage: isFullPage,
      });
  }
}

export default new GeneralHelper();
