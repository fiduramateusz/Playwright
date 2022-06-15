import { expect, Locator, Page } from '@playwright/test'

export class DropdownPage {
  //Define Selectors
  readonly page: Page
  readonly dropdownMenu1: Locator

  //init selectors using constructor
  constructor(page: Page) {
    this.page = page
    this.dropdownMenu1 = page.locator('#dropdowm-menu-1 ')
  }

  //Define contact page methods
  async visit() {
    await this.page.goto(
      'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    )
  }
  async checkTitle() {
    const element = await this.page.locator('h1')
    await expect(element).toBeVisible()
    await expect(element).toHaveText(
      'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)'
    )
  }
  async selectDropdown(dropdown: string, option: string) {
    await this.page.selectOption(dropdown, option)
  }
  async selectCheckbox(id: string, option: string) {
      await this.page.selectOption(id, option)
  }

}
