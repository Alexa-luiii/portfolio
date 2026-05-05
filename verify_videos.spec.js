
import { test, expect } from '@playwright/test';

test('portfolio should have video previews', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');

  // Check if video elements exist in the portfolio grid
  const videoPreviews = page.locator('.portfolio-img');
  await expect(videoPreviews).toHaveCount(5);

  // Verify they are video tags
  for (let i = 0; i < 5; i++) {
    const tagName = await videoPreviews.nth(i).evaluate(el => el.tagName);
    expect(tagName).toBe('VIDEO');
  }

  // Take screenshot
  await page.screenshot({ path: 'verification/portfolio_videos.png', fullPage: true });
});
