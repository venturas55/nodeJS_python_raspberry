const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const exphbs = require('express-handlebars'); //Para usar plantillas
const path = require('path');               //Para manejar directorios, basicamente unirlos 


//Initialization
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({  //con esto se configura el app.engine
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars') //no hay nada aun
}));
app.set('view engine','.hbs'); //PAra utilizar el app.engine


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //aceptar los datos desde los formularios sin aceptar imagenes ni nada raro
app.use(express.json()); //Para enviar y recibir jsons.

//Variables globales

app.use((req,res,next) =>{
   
    next();
});

//Routes
app.use(require('./routes')); //busca automaticamente el archivo index.js
app.use(require('./routes/api'));

//Public
app.use(express.static(path.join(__dirname,'public')));

//Starting
app.listen(app.get('port'),()=>{
    console.log("Running on http://localhost:4000", app.get('port'));
})