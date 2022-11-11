const express = require('express');
const router = express.Router();
const studentModule1 = require('../Module/studentModule');

router.post('/create', studentModule1.createstudent);

router.put('/update/:studentId', studentModule1.updatestudent);

module.exports = router;