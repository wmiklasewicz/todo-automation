import { t, ClientFunction } from 'testcafe';

const getURL = ClientFunction(() => window.location.href);

class GeneralHelper {
  async checkURL(link) {
    await t
      .expect(getURL()).contains(link);
  }

  async getUrl() {
    t.ctx.genericUrl = await getURL();
  }

  async takeScreenshot(isFullPage = true) {
    await t
      .takeScreenshot({
        path: `screenshots/${Date.now()}.png`,
        fullPage: isFullPage,
      });
  }
}

export default new GeneralHelper();
