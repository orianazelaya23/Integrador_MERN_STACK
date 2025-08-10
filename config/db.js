require("dotenv").config();
const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //Aca nos conectamos a mongoose a traves de la variable de entorno MONGO_URI
    console.log("✅ Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB Atlas:", error.message);
  }
};

module.exports = dbconnect;






/*
CONEXIÓN A MONGODB
const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbGestorOrdenesLogistica");
        console.log('Conexión a la base de datos fue exitosa');
    } catch (error) {
        console.error('Error en la conexión de base de datos', error);
        process.exit(1);
    }
};

module.exports = dbconnect;
*/