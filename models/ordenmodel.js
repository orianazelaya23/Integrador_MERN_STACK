const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema(
    {
        destino: {
            type: String,
            require: true,
        },
        contenido: {
             type: String,
            require: true,
        },
        fecha_creacion: {
             type: Date,
            default: Date.now,
        },
        estado: {
             type: String,
             enum: ["Pendiente","En transito", "Entregado"],
            require: true,
        }
    }
);
const ModelOrden = mongoose.model("Ordenes", ordenSchema);
module.exports = ModelOrden;
