const express = require('express');
const EmpleadoController = require('../controllers/empleadoController');
const router = express.Router();

router.get('/empleados', EmpleadoController.getEmpleados);
router.get('/empleados/:id', EmpleadoController.getEmpleadoById);
router.post('/empleados', EmpleadoController.createEmpleado);
router.put('/empleados/:id', EmpleadoController.updateEmpleado);
router.delete('/empleados/:id', EmpleadoController.deleteEmpleado);

module.exports = router;
