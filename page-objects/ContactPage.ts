import { expect, Locator, Page } from '@playwright/test'

export class ContactPage {
  //Define Selectors
  readonly page: Page
  readonly firstName: Locator
  readonly lastName: Locator
  readonly emailAddress: Locator
  readonly commentsField: Locator
  readonly resetButton: Locator
  readonly submitButton: Locator
  readonly errorMessageEmptyField: Locator
  readonly errorMessageWrongEmail: Locator
  readonly namePlaceholder: Locator

  //init selectors using constructor
  constructor(page: Page) {
    this.page = page
    this.firstName = page.locator("input[name='first_name']")
    this.lastName = page.locator("input[name='last_name']")
    this.emailAddress = page.locator("input[name='email']")
    this.commentsField = page.locator("textarea[name='message']")
    this.resetButton = page.locator("input[type='reset']")
    this.submitButton = page.locator("input[type='submit']")
    this.errorMessageEmptyField = page.locator(
      'text=Error: all fields are required'
    )
    this.errorMessageWrongEmail = page.locator(
      'text=Error: Invalid email address'
    )
    this.namePlaceholder = page.locator("input[placeholder='First Name']")
  }

  //Define contact page methods
  async visit() {
    await this.page.goto(
      'https://webdriveruniversity.com/Contact-Us/contactus.html'
    )
  }
  async fillContactForm(
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) {
    await this.firstName.type(firstName)
    await this.lastName.type(lastName)
    await this.emailAddress.type(email)
    await this.commentsField.type(message)
  }
  async submitContactForm() {
    await this.submitButton.click()
  }
  async resetContactForm() {
    await this.resetButton.click()
  }
  async assertErrorMessageEmptyField() {
    await expect(this.errorMessageEmptyField).toContainText(
      ' Error: all fields are required'
    )
  }
  async assertErrorMessageWrongEmailAddress() {
    await expect(this.errorMessageWrongEmail).toHaveText(
      ' Error: Invalid email address'
    )
  }
  async assertSuccessMessage() {
    const successInfo = this.page.locator('h1')
    await expect(successInfo).toBeVisible()
    await expect(successInfo).toHaveText('Thank You for your Message!')
  }
  async fillFormWithEmptyField(firstName: string, email: string) {
    await this.firstName.type(firstName)
    await this.emailAddress.type(email)
  }

  async checkIfReset() {
    await expect(this.namePlaceholder).toBeEmpty()
  }
}
