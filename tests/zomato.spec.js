// @ts-check
const { test, expect } = require('@playwright/test');

test('zomatologin', async ({ page }) => {
  await page.goto('https://www.zomato.com/partners/login')
  await page.locator('(//*[contains(text(),"Login")])[1]').click();
  const outerFrame = page.frameLocator('#auth-login-ui');

  const frame1 = await outerFrame.contentFrame();
  const innerFrame = frame1.frameLocator('#gsi_162356_669756');
  const frame2 = await outerFrame.contentFrame();
  const gmail = frame2.locator('#container span');
  await gmail.first().click();

  await page.pause();
});
