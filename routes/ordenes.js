const express =require('express');
const router = express.Router();
const ModelOrden = require('../models/ordenmodel');

// Listar órdenes (con filtro opcional por estado)
router.get('/ordenes', async (req, res) => {
    try {
        const { estado } =req.query;    
        const filtro = estado ? { estado } : {};    
        const ordenes = await ModelOrden.find(filtro);
        res.status(200).send(ordenes);  
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener las ordenes', error});
    }
});

// Obtener una orden por ID
router.get('/ordenes/:id', async (req, res) => {
    try {
    const ordenes = await ModelOrden.findById(req.params.id);
    if(!ordenes) {
        return res.status(404).send({ mensaje: 'orden no encontrada'});
    }

    res.status(200).send(ordenes);

} catch(error) {
    res.status(500).send({mensaje: 'Erro al encontrar orden', error});
}
});

// Crear una orden
router.post('/ordenes', async (req, res) => {
    const body = req.body;
    try {
        const nuevaOrden = await ModelOrden.create(body);
        res.status(201).send(nuevaOrden);
    } catch(error) {
        res.status(400).send({ mensaje: 'Error al crear la orden',error});    
    }
});

//Actualizar una orden
router.put('/ordenes/:id', async (req, res) => {
  try {
    const ordenActualizada = await ModelOrden.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
    if (!ordenActualizada) {
        return res.status(404).send({ mensaje: 'Orden no encontrada' });
    }
    res.status(200).send(ordenActualizada);
  } catch (error) {
    res.status(400).send({ mensaje: 'Error al actualizar la orden', error });
  }
});

//Eliminar una orden por id
router.delete('/ordenes/:id', async (req, res) => {
  try {
    const ordenEliminada = await ModelOrden.findByIdAndDelete(req.params.id);
    if (!ordenEliminada) {
        return res.status(404).send({ mensaje: 'Orden no encontrada' });
    }    
    res.status(200).send({ mensaje: 'Orden eliminada correctamente' });
  } catch (error) {
    res.status(500).send({ mensaje: 'Error al eliminar la orden', error });
  }
});

module.exports = router;