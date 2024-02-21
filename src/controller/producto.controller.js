import { validateProducto } from "../schemas/producttos.schemas.js";

class Producto_controller{
    constructor({producto_model}){
        this.producto_model = producto_model
    }

    getAll = async(req,res) =>{
        try {
            const productos = await this.producto_model.getAll()
            return res.json(productos);
        } catch (error) {
            console.error(error);
        }
    }

    create = async(req,res) =>{
        try {
            const result = validateProducto(req.body);
            if (!result.success) {
                return res.status(404).json({error: JSON.parse(result.error.message)});
            }
            console.log(result.data);
            const newProducto = await this.producto_model.create({input: req.body})
            return res.status(201).json(newProducto);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Producto_controller