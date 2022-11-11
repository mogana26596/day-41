const express = require('express');
const router = express.Router();
const mentorModule1 = require('../Module/mentorModule');

router.post('/create', mentorModule1.creatementor);

router.put('/update/:mentorId', mentorModule1.updatementor);

router.get('/get', mentorModule1.getmentor);

module.exports = router;
