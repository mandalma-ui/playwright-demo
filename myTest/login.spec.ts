import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test', async()=>{

    const browser:Browser = await firefox.launch({headless: false});
    const page:Page= await browser.newPage();
    await page.goto("https://demowebshop.tricentis.com/login");
    const logIn:Locator=page.locator("(//a[text()='Log in'])[1]");
    const Email:Locator = page.locator('#Email');
    const Password:Locator=page.locator('#Password');
    const LoginButton:Locator=page.locator("(//input[@value='Log in'])[1]");
    await logIn.click();
    await Email.fill("manojma3333@gmail.com");
    await Password.fill("Henry@12")
    await LoginButton.click();

    const title =await page.title();
    console.log("Home page Tutle"+title);

    await page.screenshot({path: 'Homepage.png'});

    expect(title).toEqual('Demo Web Shop');
    browser.close();
    console.log("Login Test - FINAL");
    console.log("Feature-Branch");
    console.log("faeture1");
    console.log("main1");

})