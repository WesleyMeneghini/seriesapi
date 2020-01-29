const express = require('express');
const app = express();
const consign = require('consign');
const bodyParse = require('body-parser');

const customExpress = () =>{

    app.use(bodyParse.urlencoded());
    app.use(bodyParse.json());

    // injeção de dependencias no app
    consign()
        .include('controllers')
        .include('models')
        .into(app);
    
    return app
}

module.exports = customExpress();
