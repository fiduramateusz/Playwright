import { test, expect } from '@playwright/test'
import { ContactPage } from '../page-objects/ContactPage'

test.describe('Contact Us', () => {
  let contactPage: ContactPage
  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page)
    await contactPage.visit()
  })

  test.only('Fill the contact us form and click the reset button', async ({
    page,
  }) => {
    await contactPage.fillContactForm(
      'Adam',
      'Abacki',
      'test@email.com',
      'Some text'
    )
    await contactPage.resetContactForm()
    await contactPage.checkIfReset()
  })
  test('Fill the contact us with the wrong email address', async ({ page }) => {
    await contactPage.fillContactForm('Adam', 'Abacki', 'test', 'Some text')
    await contactPage.submitContactForm()
    await contactPage.assertErrorMessageWrongEmailAddress()
  })
  test('Fill the contact us with the empty field', async ({ page }) => {
    await contactPage.fillFormWithEmptyField('Adam', 'adres@email.com')
    await contactPage.submitContactForm()
    await contactPage.assertErrorMessageEmptyField()
  })
  test('Fill the contact us form with the correct data and click the submit button', async ({
    page,
  }) => {
    await contactPage.fillContactForm(
      'Adam',
      'Abacki',
      'test@email.com',
      'Some text'
    )
    await contactPage.submitContactForm()
    await contactPage.assertSuccessMessage()
  })
})
