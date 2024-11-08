import { modeloProductos } from "../models/Productos.Models.js";

modeloProductos.create({
    Name:"Celular",
    Precio: 6300,
    Categoria: "Electronica"
})
export const testProductos = ()=>{
    console.log("Funciona el controlador Productos")
}