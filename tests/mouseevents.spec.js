// Mouse Actions like Rightclick, Doubleclick, Drag and drop

import {test,expect} from '@playwright/test'
test ('Mouse events', async ({page})=>
{  // mouse hover
await page.goto ('https://selenium.qabible.in/index.php')
const mousehover= page.locator('#others').hover()
  // right click
/* await page.goto('https://selenium.qabible.in/drag-drop.php')
const rightclick= page.locator("//span[text()='Draggable n°1']").click({button:'right'})
// const rightclick= page.getByText('Draggable n°1').click({button:'right'}) */

/* 
  // Double click
await page.goto('https://selenium.qabible.in/drag-drop.php')
const doubleclick= page.locator("//span[text()='Draggable n°2']").dblclick() */

// Drag and Drop
await page.goto('https://selenium.qabible.in/drag-drop.php')
//const draganddrop=await page.locator("//span[text()='Draggable n°2']").dragTo(page.locator('#mydropzone')) 
 const draganddrop= page.getByText('Draggable n°1').dragTo(page.locator('#mydropzone'))
 await page.waitForTimeout(1000);


})