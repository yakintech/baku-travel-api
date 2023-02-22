const express = require('express');
const { CategoryController } = require('../controllers/CategoryController');
const router = express.Router();


router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.post('/', CategoryController.add);
router.delete('/:id', CategoryController.remove);



module.exports = router