import { test, expect } from '@playwright/test';
import { join } from 'path';

test('has title', async ({ page,  }) => {
  await page.goto(`file://${join(__dirname, '../src/index.html')}`);
  const button = await page.getByTestId('create');
  await button.click();
  await button.click();

  const cards = await page.locator('.card');
  await expect(await cards.count()).toEqual(3);
});
