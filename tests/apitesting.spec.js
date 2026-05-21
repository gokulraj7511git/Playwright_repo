// GET APITesting
import {test,expect} from '@playwright/test'
test ('API Testing Get', async ({request})=>{
const response = await request.get('https://jsonplaceholder.typicode.com/users')
expect(response.ok()).toBeTruthy()
const body = await response.json()
console.log(body)
expect(body.length).toBeGreaterThan(0)
})

// POST APITesting


test('API Testing POST', async ({request})=>{
const postresponse = await request.post('https://jsonplaceholder.typicode.com/users',{

    data:{ 
        name:'Gokul',
        email:'temp@mail.com'
    }

})
expect(postresponse.status()).toBe(201)
const  responsebody = await postresponse.json()
console.log(responsebody)
})

// PATCH APITesting

test.only('API Testing PATCH', async ({request})=>{
const patchresponse = await request.patch('https://jsonplaceholder.typicode.com/users/11',
    {
       data:{ 
        name:'temp'
    }
})
expect(patchresponse.status()).toBe(200)
})
