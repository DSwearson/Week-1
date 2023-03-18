const express = require('express');
const path = require('path');

const app = express();


//port number for localhost ie localhost:3000
const PORT = 3000;

//app get / means run this function  at this url
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/index.html'));
});


//node is waiting for you to enter something in the browser window
app.listen(PORT, ()=>{
    console.log('listening on port  '+PORT);
})

//!!!! everytime you save you have to restart server, contrl + c and then up 

//to start a node server you type in the terminal
//node server.js  //node plus the name of file