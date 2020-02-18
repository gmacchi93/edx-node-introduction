const path =require('path')
const fs = require('fs')
const csv=require('csvtojson')
const csvFilePath= path.join(__dirname, 'customer-data.xls')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj)
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj))
})


