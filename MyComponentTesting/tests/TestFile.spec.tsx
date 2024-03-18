import { test, expect } from '@playwright/experimental-ct-react';
import { ContactPhoneLink } from '@/ContactLink.tsx';
import { AppHeader } from '@/AppHeader';

// This Test Passes if we do not include AppHeader import
test('Test ContactLink Component - This Does Pass Individually', async ({ mount }) => {
    const Component = await mount(<ContactPhoneLink></ContactPhoneLink>);
    await expect(Component).toHaveText('999999999');
});

//This Test is Currently not possible to run
test('Test Header Component - This Is The BUG', async ({ mount }) => {
    const Component = await mount(<AppHeader></AppHeader>);
    await expect(Component).toHaveText('999999999');
});