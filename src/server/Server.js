import express from "express";
import cors from "cors"
import { create_producto_router } from "../routes/producto.routes.js";
import { create_tienda_producto_router } from "../routes/tienda.routes.js";
import Producto_model from "../models/productos.model.js";
import Tienda_Productos_models from "../models/tienda.models.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000
        this.pahts = {
            productos:"/api/productos",
            tienda_productos:"/api/tiendaproductos",
        }
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.pahts.productos, create_producto_router({producto_model: Producto_model}));
        this.app.use(this.pahts.tienda_productos, create_tienda_producto_router({tienda_producto_model: Tienda_Productos_models}))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server is running on port ${this.port}`);
        })
    }
}

export default Server