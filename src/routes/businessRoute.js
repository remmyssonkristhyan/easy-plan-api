const express = require('express');
const router = express.Router();
const businessController = require("../controllers/businessController");

router.get('/', businessController.get);
router.get('/:id', businessController.getById);
router.post('/', businessController.post);
router.put('/:id', businessController.put);
router.delete('/:id', businessController.delete);

module.exports = router;