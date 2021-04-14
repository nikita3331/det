describe('First test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have hello text', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
  });

  it('It should show 1 after one tap', async () => {
    await element(by.id('button1')).tap();
    await expect(element(by.id('buttText'))).toHaveText("1");
  });
  it('It should show 2 after two taps', async () => {
    await element(by.id('button1')).tap();
    await element(by.id('button1')).tap();
    await expect(element(by.id('buttText'))).toHaveText("2");
  });
});
