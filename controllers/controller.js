let collection = require('../model/food');

function postFood(request, response) {
    let food = request.body;
    collection.postFood(food, (error, result) => {
        if (!error) {
            response.json({statusCode:201, data:result, message: 'Food Inserted'})
        }
    });
}

function getAllFoods(request, response) {
    collection.getAllFoods((error, result) => {
        if (!error) {
            response.json({statusCode:200, data:result, message: 'All Foods Successful'})
        }
    });
}

function deleteFood(request, response) {
    let food = request.body;
    collection.deleteFood(food, (error, result) => {
        if (!error){
            response.json({statusCode: 202, data:result, message: 'Food Removed'});
        }
    });
}

module.exports = {postFood, getAllFoods, deleteFood}