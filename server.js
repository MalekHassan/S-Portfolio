'use strict';

const express = require('express');

const {request, response} =  require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.listen(PORT, () => {
    console.log(`lisining to my port!!! ${PORT}`);
    })
    

server.get('/data',(request,response) => {
    response.send('Hello World')})

//  server.get('/club',(request,response) => {
//      let club=[
//          {name:'liverpool'},
//          {name:'Real Madrid'},
//          {name:'Bayern munchen'}
//      ];
//      response.json(club);
//  })

