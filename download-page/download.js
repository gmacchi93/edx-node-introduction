const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url='http://nodeprogram.com') => {
    const fetchPage = (urlF, callback) => {
        http.get(url, (res) => {
            let buff
            res.on('data', (chunk) =>{
                buff += chunk
            })
            res.on('end',()=>{
                callback('',buff)
            })
        }).on('error', (err)=>{
            console.error(`Got error : ${err}`)
            callback(err)
        })
    }
    const folderName = uuidv1()

    fs.mkdirSync(folderName)
    fetchPage(url, (err, data) =>{
        if (err) return console.log(err)
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
        fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
        console.log(`downloading is done in folder ${folderName}`)
    })
}

downloadPage(process.argv[2])