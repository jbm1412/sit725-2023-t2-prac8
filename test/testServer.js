const { expect } = require("chai");
const request = require("request");
let url = "http://localhost:3000/api/food";
let food = {title: 'Ramen',
            subtitle: 'Shoyu Ramen',
            path: 'pics/Spicy-Shoyu-Ramen-8055-I.jpg',
            description: 'Shoyu Ramen'}

describe("testing GET Food", function(){
    it('return statusCode of 200', function(done){
        request(url, function(error, response, body){
            console.log(body);
            let responseBody = JSON.parse(body);
            expect(responseBody.statusCode).to.equal(200);
            done();
        });
    });
});

describe("testing POST Food", function(){
    it('adding food', function(done){
        request.post({url: url, form: food}, function(error, response, body){
            console.log(body);
            let responseBody = JSON.parse(body);
            expect(responseBody.statusCode).to.equal(201);
            done();
        });
    });
});

describe("testing DELETE Food", function(){
    it("deleting food", function(done){
        request.delete({url: url, form: food}, function(error, response, body){
            console.log(body);
            let responseBody = JSON.parse(body);
            expect(responseBody.statusCode).to.equal(202);
            done();
        });
    });
});