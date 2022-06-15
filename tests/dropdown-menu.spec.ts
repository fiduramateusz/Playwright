import { test, expect } from '@playwright/test'
import { DropdownPage } from '../page-objects/DropdownPage'

test.describe('Dropdown Menu(s), Checkboxe(s) & Radio Button(s) ', () => {
  let dropdownPage: DropdownPage
  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page)
    await dropdownPage.visit()
  })

  test('Check if title is displaying', async ({ page }) => {
    dropdownPage.checkTitle()
  })
  test('Select dropdowns', async ({ page }) => {
    dropdownPage.selectDropdown('#dropdowm-menu-1','c#')
    dropdownPage.selectDropdown('#dropdowm-menu-1','python')
    dropdownPage.selectDropdown('#dropdowm-menu-1','sql')
    dropdownPage.selectDropdown('#dropdowm-menu-2','maven')
    dropdownPage.selectDropdown('#dropdowm-menu-2','testng')
    dropdownPage.selectDropdown('#dropdowm-menu-2','junit')
    dropdownPage.selectDropdown('#dropdowm-menu-3','css')
    dropdownPage.selectDropdown('#dropdowm-menu-3','javascript')
    dropdownPage.selectDropdown('#dropdowm-menu-3','jquery')
  })
  test('Select checkboxes', async ({ page })=>{
    dropdownPage.selectCheckbox('checkboxes','option-1')
  })
})
