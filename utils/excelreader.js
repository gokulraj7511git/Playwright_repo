const XLSX = require('xlsx'); // importing the library to read Excel files
function getData() { 

    const workbook = XLSX.readFile('TestData/Applicationdata.xlsx') // reading the Excel file
    const sheet=workbook.Sheets['loginpage']  //'loginpage'>> excel sheet name
    const data=XLSX.utils.sheet_to_json(sheet)  // excel to javascript format conversion  
    return data 
}
module.exports={getData}