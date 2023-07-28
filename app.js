/* Importar as configura��es do servidor */ 
var app = require('./config/server');

/* Parametrizar a porta de escuta */ 
var server = app.listen(80, function(){
    console.log('Servidor online na porta 80');
})

/* Criando inst�ncia socket.io por websocket */
var io = require('socket.io')(server);
app.set('io', io);

io.on('connection', function(socket){
    console.log('Usu�rio conectou');

    socket.on('disconnect', function(data){
        console.log('Usu�rio desconectou');
    });

    socket.on('msgParaServidor', function(data){
  

        /* Di�logo */       
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        
        /* Participantes */
        if (parseInt(data.apelido_atualizado) == 0) {
            socket.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );

            socket.broadcast.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );
        };

    });


})


