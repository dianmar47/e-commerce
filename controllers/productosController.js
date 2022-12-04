const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");

exports.obtenerProducto = async ( req, res) => {
    try{
        const producto = await Productos.find({ categoriaId: req.usuario.id});

        res.json({ producto });
    }catch(error){
        console.log("Error mostrando los productos"+error);
    }
};

exports.crearProducto = async ( req, res) => {
    const {categoriaId} =req.body;
    try{
        const foundCategory = await Categorias.findById(categoriaId);
        console.log(foundCategory);


        const producto = new Productos(req.body);

        // producto.categoriaId = req.Categoria.id;
    
        producto.save();
    
        res.json(producto);
    }catch(error){
        console.log(error);
    }
   

};

exports.actualizarProducto = async ( req, res) => {
    res.status(404).json({ msg : "actualizar producto"});
};

exports.borrarProducto = async ( req, res) => {
    res.status(404).json({ msg : "borrar producto"});
};