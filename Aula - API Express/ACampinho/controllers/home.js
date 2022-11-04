module.exports = (app)=>{
    const HomeController = {
        index: function(req, res) {
            res.render('home/index')
        },
        login(req, res){
            const {usuario} = req.body;
            const {email, nome} = usuario;
            if(email&&home){
                usuario.contatos = [];
                req.session.usuario = usuario;
                req.redirect('/contatos')
            } else {
                res.redirect('/')
            }
        }
    }
    return HomeController;
}