import { expect, test } from '@playwright/test';
import { ProfilePO } from '../pages/profile.po';
import { Constants } from '../fixtures/contants';
import { User } from '../models/user';
import { UserFactory } from '../fixtures/factory/user-factory';
import { base } from '../helpers/api/base';

const profilePage: ProfilePO = new ProfilePO();
const user: User = UserFactory.simpleUser();

test('My profile page. Client area', async ({ page, request }) => {
  await base.login({ page, request, user });

  await page.locator(profilePage.userDropDown).click();
  await page.locator(profilePage.profileButton).click();

  await expect(page).toHaveURL('/user/profile');

  await expect(page.locator(profilePage.getItem('name'))).toContainText(user.name);
  await expect(page.locator(profilePage.getItem('email'))).toContainText(user.email);
  await expect(page.locator(profilePage.getItem('phone'))).toContainText(user.phone);
  await expect(page.locator(profilePage.getItem('address'))).toContainText(profilePage.getFullUserAddress(user.address));
  await expect(page.locator(profilePage.getItem('pin'))).toContainText(user.supportPin);
  await expect(page.locator(profilePage.getItem('password'))).toContainText(Constants.PASSWORD_HIDDEN(5));
});
