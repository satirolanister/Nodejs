const express = require('express');
const route = express.Router();


const controller = require('../controllers/index');

route.get('/',controller.index);

route.get('/products', controller.products);

route.post('/new-product', controller.addproduct);


module.exports=route;