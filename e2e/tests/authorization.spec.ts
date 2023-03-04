import { test, expect } from '@playwright/test';
import { AuthorizationPO } from '../pages/authorization.po';
import { Constants } from '../fixtures/contants';
import users from '../fixtures/users.json';
import { UserFactory } from '../fixtures/factory/user-factory';
import { User } from '../models/user';

const authorizationPage: AuthorizationPO = new AuthorizationPO();
const user: User = UserFactory.simpleUser();
const nonExistingUser: User = UserFactory.nonExistingUser();
const invalidUser: User = UserFactory.invalidUser();

test('Authorization page (Welcome back!)', async ({ page }) => {
  await page.goto('');

  await page.getByText('Log in').click();
  await expect(page).toHaveURL('/authorize');

  await page.locator(authorizationPage.emailInput).fill(user.email);
  await page.locator(authorizationPage.passwordInput).fill(user.password);
  await page.locator(authorizationPage.showHidePasswordButton).click();
  await expect(page.locator(authorizationPage.passwordInput)).toHaveValue(user.password);
  await expect(page.locator(authorizationPage.passwordInput)).toHaveAttribute('type', 'text');

  await page.locator(authorizationPage.submitButton).click();

  await expect(page.locator(authorizationPage.userDropDown)).toBeVisible();
  await expect(page.locator(authorizationPage.userDropDownText)).toHaveText(user.email);
  await expect(page.locator(authorizationPage.header)).not.toContainText('Log in');
});

test('Authorization page. Not registered user', async ({ page }) => {
  await page.goto('/authorize');

  await page.locator(authorizationPage.emailInput).fill(nonExistingUser.email);
  await page.locator(authorizationPage.passwordInput).fill(nonExistingUser.password);
  await page.locator(authorizationPage.submitButton).click();

  await expect(page.locator(authorizationPage.notification)).toBeVisible();
  await expect(page.locator(authorizationPage.notification)).toHaveText(Constants.WRONG_EMAIL_OR_PASSWORD_MESSAGE);
});

test('Authorization page. Invalid email', async ({ page }) => {
  await page.goto('/authorize');

  await page.locator(authorizationPage.emailInput).fill(invalidUser.email);
  await page.locator(authorizationPage.passwordInput).fill(invalidUser.password);
  await page.locator(authorizationPage.submitButton).click();

  await expect(page.getByText(Constants.WRONG_EMAIL_MESSAGE)).toBeVisible();
});
