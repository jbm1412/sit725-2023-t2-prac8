let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', (request, response) => {
    controller.postFood(request, response);
});

router.get('/', (request, response) => {
    controller.getAllFoods(request, response);
});

router.delete('/', (request, response) => {
    controller.deleteFood(request, response);
});

module.exports = router;