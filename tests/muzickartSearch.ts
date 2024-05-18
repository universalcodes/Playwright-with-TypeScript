import { test, expect } from '@playwright/test';
import testdataa from "../testData/testData.json";


test.only('Navigate to Muzickart', async({page})=>{
  await page.goto('https://muzickart.com/');
  await expect(page).toHaveTitle("Muzickart - Order Online");
  await page.locator('//*[@class="search-comp pointer"]/child::span[text()="Search"]').click();
  await page.locator('//*[@placeholder="Search for items..."]').click();
  //await page.locator('//*[@placeholder="Search for items..."]').fill("Dilwale Dulhania Le Jayenge");
  //await page.locator('//*[@placeholder="Search for items..."]').type("Dilwale Dulhania Le Jayenge");
  
  await page.locator('//*[@placeholder="Search for items..."]').waitFor({timeout : 10000});
  await page.locator('//*[@placeholder="Search for items..."]').fill(testdataa.titleName);
  await page.locator('//*[@placeholder="Search for items..."]').waitFor({timeout : 10000});




});





test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/