class LoginPage {
 constructor(){
  this.usernameInput = '#user-name'
  this.passwordInput = '#password'
  this.loginButton = '#login-button'
  this.inventoryList = '.inventory_list'
 }
  async navigateToLoginScreen() {
    // Go to the application
    await page.goto('https://www.saucedemo.com/')
  }

  async submitLoginForm() {
    // Login with valid credentials
    await page.fill(this.usernameInput, 'standard_user')
    await page.fill(this.passwordInput, 'secret_sauce')
    await page.click(this.loginButton)
  }

  async submitLoginWithParameters(username, password) {
    // Login with given credentials (Username and Password are coming from Feature file)
    await page.fill(this.usernameInput, username)
    await page.fill(this.passwordInput, password)
    await page.click(this.loginButton)
  }

  async assertUserIsLoggedIn() {
    // Assertion for an web element present on the Homepage (User comes at HomePage after successful login)
    await page.waitForSelector(this.inventoryList)
  }

  async pause() {
    // Wait for 3 seconds
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
