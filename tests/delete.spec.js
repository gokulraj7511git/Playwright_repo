import {test,expect} from '@playwright/test'
test('API Testing Delete',async({request}) =>{

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/10',
        {

    }
)
  expect(response.status()).toBe(200)
})
