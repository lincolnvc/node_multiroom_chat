module.exports.iniciaChat = function(application, req, res) {

    var dadosForm = req.body;
    
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 100 caracteres').len(3, 100);

    var erros = req.validationErrors();

    if (erros) {
       res.render('index', {validacao: erros}) ;
       return; 
    }

    /* Diálogo */
    application.get('io').emit(
        'msgParaCliente', 
        {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar no chat!'});


    res.render('chat', {dadosForm: dadosForm});

}
