const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////////////////////
// FILES


// // Blocking, synchronous way
// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf8');

// console.log(textIn);

// const textOut = `This is what we know abut the avocado: ${textIn}.\nCreated on ${Date.now()}`; 
// fs.writeFileSync('./1-node-farm/starter/txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.error('ERROR!');

//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                 console.log('Your file has been written');
//             })
//         })
//     })
// })
// console.log('Will read file');


///////////////////////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW!')
    }else if(pathName === '/product'){
        res.end('This is the PRODUCT!')
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>')
    }

    
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
})