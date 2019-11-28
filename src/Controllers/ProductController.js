const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
        //Mostrar todo o conteudo
    async index(req, res) {
        const { page = 1} = req.query //add paginação
        const products = await Product.paginate({}, {page, limit: 10 });

        return res.json(products)
    },
        //Mostrar conteudo especifico
    async show(req, res){
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },    
        //Criação de conteúdo
    async store(req, res){        
        const product = await Product.create(req.body)

        return res.json(product)
    },
        //Editar conteudo
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(product)
    },
        //Remover conteudo
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}