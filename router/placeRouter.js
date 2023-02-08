const express = require('express');
const { placeController } = require('../controllers/PlaceController');
const router = express.Router();


router.get('/', placeController.getAll);
router.get('/:id', placeController.getById);
router.post('/', placeController.add);


module.exports = router