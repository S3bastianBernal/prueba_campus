import z from "zod"

const productosSchema = z.object({
    nombre: z.string({
        required_error: "nombre es obligatorio",
        invalid_type_error: "nombre requiere ser string"
    }).min(1).max(60),
    presentacion: z.string({
        required_error: "presentacion es obligatorio",
        invalid_type_error: "presentacion requiere ser string"
    }).min(1).max(25)
})

export function validateProducto(input){
    return productosSchema.safeParse(input)
}

export function validatePartialProducto(input){
    return productosSchema.partial().safeParse(input);
}