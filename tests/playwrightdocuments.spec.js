// @ts-check
const { test, expect } = require('@playwright/test');
const { DevPage } = require('../pages/devPage')
const { DocsPage } = require('../pages/docsPage')


test.skip('get started link', async ({ page }) => {
  const dev = new DevPage(page)
  await dev.goto()
  // Click the get started link.
  await dev.goToGetStart()
  const docs = new DocsPage(page)
  // Expects page to have a heading with the name of Installation.
  await expect(docs.gettingStarted_installationLink_Header).toBeVisible();
});
