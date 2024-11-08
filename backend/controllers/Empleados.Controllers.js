import { modeloEmpleado } from "../models/Empleados.Modesl.js";

modeloEmpleado.create({
    Name:"Leslie",
    Apepat:"Arjona",
    Edad:21,
    Correo:"Leslie@gmail.com"
})

export const testEmpleado = ()=>{
    console.log("Dunciona el controlador de empleados")
}