import { test } from '@playwright/test';
import { IUser } from '../../types/user';

export const base = {
  login: async ({ page, request, user }: { page: any; request: any; user: IUser }) => {
    await test.step(`Login as user`, async () => {
      await page.goto('');

      const cookies = await page.context().cookies();
      const sslsSESSIDCookie = cookies.filter((cookie) => cookie.name === 'sslsSESSID');

      await request.post('/authorize/authenticate', {
        data: {
          email: user.email,
          password: user.password,
        },
        headers: {
          cookie: `sslsSESSID=${sslsSESSIDCookie[0].value}`,
        },
      });

      await page.reload();
    });
  },
};
