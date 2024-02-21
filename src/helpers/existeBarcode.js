import dbconnection from "../database/connection.js";

const connection = dbconnection();

const existe_barcode = async(req,res)  =>{
    const existe = (await connection).query(`SELECT * FROM productos WHERE barcode = ${barcode}`)
    return res.json(existe);
}

export {
    existe_barcode
}