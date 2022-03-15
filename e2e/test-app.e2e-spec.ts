import {ClientFunction, Selector, t} from 'testcafe';

fixture`Blank target`
    .page(`http://localhost:4200`);
test('Should test blank link', async () => {
    await t.click(Selector('#myLink'));
    const getLocation = ClientFunction(() => {
        return window.location.href;
    });
    await t.expect(getLocation()).contains('https://www.google.com/');
});
