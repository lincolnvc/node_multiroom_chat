/* Importar o m�dulo da library express */
var express = require('express');

/* Importar o m�dulo do consign */
var consign = require('consign');

/* Importar o m�dulo do body-parser */
var bodyParser = require('body-parser');

/* Importar o m�dulo do express-validator */
var expressValidator = require('express-validator');

/* Iniciar o objeto express */
var app = express();

/* Setar as vari�veis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar o middleware express.static  */
app.use(express.static('./app/public'));

/* Configurar o middleware body-parser  */
app.use(bodyParser.urlencoded({extended: true}));

/* Configurar o middleware express-validator  */
app.use(expressValidator());

/* Configurando o consign */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* Exportar o objeto app */
module.exports = app;

