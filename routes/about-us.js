var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('about-us', { title: 'About Us' });
});

module.exports = router;
