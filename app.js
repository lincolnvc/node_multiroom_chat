/* Importar as configura��es do servidor */ 
var app = require('./config/server');

/* Parametrizar a porta de escuta */ 
app.listen(80, function(){
    console.log('Servidor online na porta 80');
});