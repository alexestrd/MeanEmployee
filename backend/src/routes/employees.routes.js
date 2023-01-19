const {Router} = require('express');
const router = Router();

//CRUD

const employeesCtrl = require('../controllers/employees')

router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployees);

router.get('/:id', employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployees);

router.delete('/:id', employeesCtrl.deleteEmployees);


module.exports = router