import dbconnection from "../database/connection.js";
import { existe_barcode } from "../helpers/existeBarcode.js";

const connection = dbconnection();

class Producto_model{

    static async getAll(){
        try {
            const productos = (await connection).query(`SELECT * FROM productos`);
            console.log(productos);
            return productos
        } catch (error) {
            console.error(error);
        }
    }

    static async create({input}){
        try {
            const {estado,kit,barcode, nombre, presentacion,descripcion,foto,peso} = input
            const producto = (await connection).query('INSERT INTO productos(estado, kit,barcode, nombre,presentacion,descripcion, foto, peso) VALUES (?,?,?,?,?,?,?,?)',[estado,kit,barcode,nombre,presentacion,descripcion,foto,peso])
            return producto
        }catch (error) {
         console.error(error);   
        }
        
    }
}

export default Producto_model