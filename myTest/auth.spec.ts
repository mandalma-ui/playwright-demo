import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('Auth test', async()=>{
const browser:Browser = await firefox.launch({headless: false});
    const page:Page= await browser.newPage();
    const username ='admin';
    const password ='admin';
    //const authHeader = 'Basic '+btoa(username+':'+password);
    //console.log(authHeader);
    await page.setExtraHTTPHeaders({Authorization : createAuthheader(username,password)});
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.screenshot({path: 'Homepage.png'});
    //await page.pause();
    await new Promise(()=>{});
});

function createAuthheader(username:any,password:any)
{
    return 'Basic '+ btoa(username+':'+password);
}