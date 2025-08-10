const express = require("express");
const app = express();
const dbconnect = require('./config/db');
const ordenesRoutes = require('./routes/ordenes');

app.use(express.json());
app.use(ordenesRoutes);

/*Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Gestión de Órdenes de Logística funcionando 🚚");
});
*/

// Puerto
dbconnect().then(() => {
app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000');
});

}).catch(err => {
  console.log('No se pudo iniciar el servidor debido a un problema en la base de datos');
});
