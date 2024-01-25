import  express  from "express";
const animal = express();

let animales = [{
    nombre  : "perro",
    sonido : "wouf"
},
{
    nombre : "gato",
    sonido : "miau"
}]

animal.get('', (req,res)=>{

    res.json(animales);

})

export { animal }