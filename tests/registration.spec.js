import { test, expect } from '@playwright/test';

test('User Register flow', async ({ page }) => {

  await page.goto('https://automationexercise.com');
  await page.locator('a[href="/login"]').click();

  await page.locator('input[data-qa="signup-name"]').fill('januushan');
  await page.locator('input[data-qa="signup-email"]').fill('januushan2025@gmail.com');

  await page.locator('button[data-qa="signup-button"]').click();

  await page.locator('#id_gender1').check();
  await page.locator('#password').fill('password123');

  await page.selectOption('#days', '1');
  await page.selectOption('#months', '1');
  await page.selectOption('#years', '2000');

  await page.locator('#newsletter').check();
  await page.locator('#optin').check();

  await page.locator('#first_name').fill('Janu');
  await page.locator('#last_name').fill('Shan');

  await page.locator('#company').fill('MyCompany');
  await page.locator('#address1').fill('123 Street');
  await page.locator('#address2').fill('Suite 456');
  await page.selectOption('#country', { label: 'India' });
  await page.locator('#state').fill('TN');
  await page.locator('#city').fill('Chennai');
  await page.locator('#zipcode').fill('600001');

  await page.locator('#mobile_number').fill('0750424523');

  await page.locator('button[data-qa="create-account"]').click();
  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();

  await page.locator('a[data-qa="continue-button"]').click();
  await expect(page.locator('text=Logged in as januushan')).toBeVisible();
});
