 //How to create a simple server :) 
const http = require('http');
const port='3000';
const server= http.createServer((req,res)=>{
    if (req.url == '/'){
        res.statusCode=200;
        return res.end('<h1>Hello NodeJS</h1>');
    }else if (req.url=='/about') {
        res.statusCode=200;
        return res.end('<h1>Hello from about</h1>');
    }else{
        res.statusCode=404
        return res.end('<h1>Error 404</h1>')
    }

})

server.listen(port,()=>{
    console.log(`server is running... http://localhost:${port}`);
})