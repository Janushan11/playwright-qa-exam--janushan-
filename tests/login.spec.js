import { test, expect } from '@playwright/test';

test('login and logout flow', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('januushan2025@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  
  await page.getByRole('button', { name: 'Login' }).click();

});