let client = require('../dbConnection');
let collection = client.db().collection('Foods');

function postFood(food, callback) {
    collection.insertOne(food, callback);
}

function getAllFoods(callback){
    collection.find({}).toArray(callback);
}

function deleteFood(food, callback) {
    collection.deleteOne(food, callback);
}

module.exports = {postFood, getAllFoods, deleteFood}