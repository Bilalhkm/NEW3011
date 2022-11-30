/* //How to create a simple server :) 
const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('hello node');
    res.end();
})
server.listen('3000',()=>{console.log(`server is running.. http://localhost:3000`);}); */



