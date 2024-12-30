import { test, expect, request } from '@playwright/test';

// Front End - Users see on the internet - react, angular, view etc etc, hmtl css
// Back End - Server side - Node.js, Python, Ruby, PHP etc etc, API,
// Database - MySQL, MongoDB, PostgreSQL etc etc, SQL, NoSQL

// Request Format
// URL, Method, header, body(payload)
// Response Format
// Status Code, Headers, reponse  

const productName :string = "IPHONE 13 PRO"
const email: string = "test7lYM@gmail.com" 
const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "India", productOrderedId: "676a6619e2b5443b1f004fff"}]}

let token: string
let orderID: string

test.beforeAll("ToGet the Auth token", async ()=>{
    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data : payload
        }
    )

    //console.log(await apiResponse.json());
    const jsonResponse = await apiResponse.json()
    token = await jsonResponse.token
    // console.log(token)

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data : orderPayload,
            headers: {
                "authorization" : token
            }
        })

        const orderResponseJson = await orderResponse.json()
        orderID = await orderResponseJson.orders[0]
        // console.log(orderID)

})


test('Web API automation', async ({page})=>{

    await page.addInitScript((value) =>{
        window.localStorage.setItem('token', value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    await console.log(orderID); // | dfdf |
    await page.locator("[routerLink='/dashboard/myorders']").first().click()
    await page.locator("tbody").waitFor()
    const rows :Locator = page.locator("tbody tr")
    const countOfRows = await rows.count();

    for(let i =0; i<countOfRows; i++){ 
        // nth(index)
        const orderIDText:string|null = await rows.nth(i).locator("th").textContent()

        if(orderID.includes(orderIDText)){
            await rows.nth(i).locator("button").first().click()
            break
        }

    }

    const orderSummaryOrderID : string|null= await page.locator("div.col-text").textContent()
    await expect(orderID.includes(orderSummaryOrderID)).toBeTruthy()
})

