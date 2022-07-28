const express = require('express');
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get('/', companyController.get);
router.get('/:id', companyController.getById);
router.post('/', companyController.post);

module.exports = router;