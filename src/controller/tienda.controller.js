
class Tienda_Producto_controller{
    constructor({tienda_producto_model}){
        this.tienda_producto_model = tienda_producto_model
    }

    getAll = async(req,res) =>{
        try {
            const Tienda_productos = await this.tienda_producto_model.getAll()
            return res.json(Tienda_productos);
        } catch (error) {
            console.error(error);
        }
    }

    create = async(req,res) =>{
        try {
            const newTiendaProducto = await this.tienda_producto_model.create({input: req.body})
            return res.status(201).json(newTiendaProducto);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Tienda_Producto_controller