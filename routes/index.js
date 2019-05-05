var { Router } = require('express');

var router = Router();

var step_1 = require('./step-1');
var step_2 = require('./step-2');
var step_3 = require('./step-3');
var step_4 = require('./step-4');
var step_5 = require('./step-5');

router.use('/step-1', step_1);
router.use('/step-2', step_2);
router.use('/step-3', step_3);
router.use('/step-4', step_4);
router.use('/step-5', step_5);

router.get('/', (req, res) => {
    res.render('index', { title: "Citizen's Coolkit" });
});

module.exports = router;