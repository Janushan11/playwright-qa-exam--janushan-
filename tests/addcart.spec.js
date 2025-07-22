import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.evaluate(() => {
    const header = document.querySelector('h2.title.text-center');
    if (header) header.style.pointerEvents = 'none';
  });

  const firstAddToCartBtn = page.locator('.product-overlay .add-to-cart').first();
  await firstAddToCartBtn.scrollIntoViewIfNeeded();
  await firstAddToCartBtn.click();

  const modal = page.locator('#cartModal');
  await expect(modal).toBeVisible();
  await modal.locator('a[href="/view_cart"]').click();

  const cartProductRow = page.locator('.cart_info tbody tr').first();

  await expect(cartProductRow).toBeVisible();


  const priceText = await cartProductRow.locator('.cart_price').innerText();
  const quantityInput = cartProductRow.locator('.cart_quantity input');
  const totalText = await cartProductRow.locator('.cart_total').innerText();

  const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
  const quantity = parseInt(await quantityInput.inputValue(), 10);
  const total = parseFloat(totalText.replace(/[^0-9.]/g, ''));

  
  expect(quantity).toBeGreaterThan(0);
  expect(total).toBeCloseTo(price * quantity, 2);
});
