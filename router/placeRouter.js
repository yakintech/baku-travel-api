const express = require('express');
const { placeController } = require('../controllers/PlaceController');
const router = express.Router();


router.get('/', placeController.getAll);
router.get('/:id', placeController.getById);
router.post('/', placeController.add);
router.delete('/:id', placeController.remove);


module.exports = router