import dbconnection from "../database/connection.js";


const connection = dbconnection();

class Tienda_Productos_models{
    
    static async getAll(){
        try {
            const productos = (await connection).query(`SELECT * FROM tiendas_productos`);
            console.log(productos);
            return productos
        } catch (error) {
            console.error(error);
        }
    }

    static async create({input}){
        try {
            const {compra_maxima,valor,id_promocion, id_tienda, id_producto} = input
            const producto = (await connection).query('INSERT INTO productos(compra_maxima, valor,id_promocion, id_tienda,id_producto) VALUES (?,?,?,?,?)',[compra_maxima,valor,id_promocion,id_tienda,id_producto])
            return producto
        }catch (error) {
         console.error(error);   
        }
        
    }

}


export default Tienda_Productos_models