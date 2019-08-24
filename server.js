// colocar en el packege.json colocar en script "dev": "nodemon server.js y luego en comando npx run dev
const express = require('express');
const path = require('path');
const app = express();
const route = require('./routes/index');
const bodyParser = require('body-parser');
// settings configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) =>{
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(route);

// static file front
app.use(express.static(path.join(__dirname, 'public')));


// start server
app.listen(app.get('port'), () => {
    console.log('Server on ', app.get('port'));
});