const express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');

//1
const app = express();

//2 (CONFIGURACION DEL PUERTO PARA INICIAR SERVICIO BACKEND)
app.set('port', 9001)

app.listen(app.get('port'), ()=>{console.log(`BACKEND PRODUCTOS LISTENING PORT ${app.get('port')}`);})