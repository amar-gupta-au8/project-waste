const fs = require('fs');
const http = require('http')
const url = require('url')

// // Blocking synchronus way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn)
// const textOut = `this is what we know about ${textIn}\n on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('file written');

// //Non-Blocking, asynchronus way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) =>{
//                 console.log('your file has been written');
//             })
//         })
//     })
// });
///////////////////////////
// server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8')

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/' || pathName === '/over') {
        res.end('Hello from the server')
    } else if (pathName === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(data)
        
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>page not found</h1>')
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the request on port http://127.0.0.1:8000')
})