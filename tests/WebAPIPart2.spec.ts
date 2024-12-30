import { test, expect, request } from '@playwright/test';

const putPayload = {
    name: "TypeScript",
    job: "API Automation"
}
test('GET method API automation', async ()=>{
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get("https://reqres.in/api/users?page=2")
    await expect(getResponse.ok()).toBeTruthy()
    await expect(getResponse.status()).toBe(200)
    const jsonResponse = await getResponse.json()
    console.log(await jsonResponse.data[0].id)
})

test('PUT method API automation', async ()=>{
    const apiContext = await request.newContext()
    const putResponse = await apiContext.put("https://reqres.in/api/users/2", {

        data : putPayload
    })
    await expect(putResponse.ok()).toBeTruthy()
    await expect(putResponse.status()).toBe(200)
    const jsonResponse = await putResponse.json()
    console.log(jsonResponse);
    console.log(await jsonResponse.name)
    console.log(await jsonResponse.job);
    
})

test('DELETE method API automation', async ()=>{
    const apiContext = await request.newContext()
    const getResponse = await apiContext.delete("https://reqres.in/api/users/2")
    await expect(getResponse.ok()).toBeTruthy()
    await expect(getResponse.status()).toBe(204)
})

