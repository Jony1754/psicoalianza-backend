const express = require('express');
const CargoController = require('../controllers/cargoController');
const router = express.Router();

router.get('/cargos', CargoController.getCargos);
router.get('/cargos/:id', CargoController.getCargoById);
router.post('/cargos', CargoController.createCargo);
router.put('/cargos/:id', CargoController.updateCargo);
router.delete('/cargos/:id', CargoController.deleteCargo);

module.exports = router;
