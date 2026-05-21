import {test,expect} from '@playwright/test'
test('API Testing PUT',async({request}) =>{

    const response = await request.put('https://jsonplaceholder.typicode.com/users/10',{
        data:
        {
            "id": 10,
            "name": "Gokul Raj",
            "username": "Gokul",
            "email": "gokuldemo@",
            "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
    }
    }
    })
    expect(response.status()).toBe(200) })