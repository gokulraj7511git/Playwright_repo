import { LoginPage } from '../Pages/LoginPage1'
import {test,expect} from '@playwright/test'

test ('Login using valid credentials', async ({page}) => 
{
const loginpage = new LoginPage(page)
await loginpage.goto()
await loginpage.login('standard_user','secret_sauce')


})