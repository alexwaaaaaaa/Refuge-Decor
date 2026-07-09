import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Refuge Decor/);
  });

  test('displays hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Your Space, Refined')).toBeVisible();
  });

  test('navigates to services section', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Explore Services').click();
    await expect(page.getByText('Interior Design')).toBeVisible();
  });

  test('navigates to contact section', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Request Consultation').click();
    await expect(page.getByText('Get in Touch')).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Work' }).click();
    await expect(page).toHaveURL('/work');
    
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
    
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });
});
