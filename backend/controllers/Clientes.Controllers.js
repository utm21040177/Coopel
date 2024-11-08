import { modeloCiente } from "../models/Clientes.Models.js";

modeloCiente.create({
    Name:"Lalo",
    Apepat:"Lara",
    Edad:21,
    Correo:"utm21040177@utma.edu.mx"
})

export const testCliente=()=>{
    console.log("Funciona el controlador")
}