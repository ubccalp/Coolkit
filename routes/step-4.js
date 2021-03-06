var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-4-activity-homepage', { title: 'Step 4: Visioning Your Future' });
});

router.get('/a1', (req, res) => {
    res.render('step-4-activity-1', { title: 'What to Visualize | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-4-activity-2', { title: 'From Visioning to Reality | Coolkit' });
});

router.get('/a3', (req, res) => {
    res.render('step-4-activity-3', { title: 'Change Your Transportation | Coolkit' });
});


module.exports = router;
