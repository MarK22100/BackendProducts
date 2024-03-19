const express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');
const path = require('path');
const app = express();
const dataBaseConnection = require('./dataBaseConnection.js');
const UserRoutes = require('./routes/UserRoutes.js');
const ProductsRutes = require('./routes/ProductRoutes');

//1
//CONFIGURACION PARA LAS VARIABLES DE ENTORNO
require('dotenv').config()

dataBaseConnection()

//2 (CONFIGURACION DEL PUERTO PARA INICIAR SERVICIO BACKEND)
app.set('port', process.env.PORT || 9001)

app.listen(app.get('port'), ()=>{console.log(`BACKEND PRODUCTOS LISTENING PORT ${app.get('port')}`);})

console.log(process.env.PORT)
console.log("prueba de demon");


app.use(express.json());//PERMITE RECIBIR OBJETOS EN FORMATO JSON   

app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));//muestra las peticiones de la terminal

app.use(cors())//permite el acceso a rutas remotas

//CARGAR ARCHIVOS ESTATICOS
console.log(__dirname, 'DIRNAME');
app.use(express.static(path.join(__dirname, '../public')));

//req (REQUST= PEDIDO/PETICION)
//res (RESPONSE= CONTIENEN LA PETICION DE INFO DE SERVIDOR A CLIENTE)
//next (NEXT= INDICA QUE CONTINUE CON LA SIGUENTE FUNCION O MIDDLEWARE)
app.get('/test', async(req, res, next)=>{
    try {
        console.log("REQUEST--->", req);
        return res.status(200).json({success:true, message:'API IS ALIVE'});
    } catch (error) {
        console.error(error);
        next(error);
    }
})
UserRoutes('/users', app)
ProductsRutes('/products',app)