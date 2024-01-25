import pg from 'pg-promise'
const pgp = pg()
const cnstr = `base de datos`
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion exitosa");
    })
    .catch((err)=>{
        console.log(`Error de conexion ${err}`)
    })

    export {db}