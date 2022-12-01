 // create a simple server with if and html :) 
const http = require('http');
const port='3000';
const fs = require('fs');

homePage=fs.readFileSync('./pages/home.html')
aboutPage=fs.readFileSync('./pages/about.html')
errorPage=fs.readFileSync('./pages/error.html')

const server= http.createServer((req,res)=>{
    if (req.url == '/'){
        res.statusCode=200;
        //return res.end('<h1>Hello NodeJS</h1>');
        return res.end(homePage);
    }else if (req.url=='/about') {
        res.statusCode=200;
        //return res.end('<h1>Hello from about</h1>');
        return res.end(aboutPage)
    }else{
        res.statusCode=404
        //return res.end('<h1>Error 404</h1>')
        return res.end(errorPage)
    }

})

server.listen(port,()=>{
    console.log(`server is running... http://localhost:${port}`);
})