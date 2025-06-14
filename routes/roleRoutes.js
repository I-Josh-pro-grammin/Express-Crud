const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/',  roleController.createRole);
router.get('/', roleController.getRoles);

module.exports = router;
