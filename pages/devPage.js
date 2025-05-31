const { expect } = require('@playwright/test');
exports.DevPage = class DevPage {
    constructor(page) {
        this.page = page
        this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        
    }
    async goto() {
        await this.page.goto('https://playwright.dev');
    }
    async goToGetStart() {
        await this.getStartedLink.click()
    }
}