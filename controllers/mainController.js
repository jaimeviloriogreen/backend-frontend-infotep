
import { request, response } from "express";
const persons = [];

const getPersons = (req = request, res = response)=>{
    res.json({persons});
}

const addPersons = (req = request, res = response)=>{
    const { nombre, apellido, cedula, telefono, direccion, edad } = req.body;
    persons.push({nombre, apellido, cedula, telefono, direccion, edad })
    res.json({added:true});
}


export{
    getPersons,addPersons
}