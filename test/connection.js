const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to database before tests run
before(function (done) {

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function () {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function (error) {
        console.log('Connection error');
    });
});

// Drop the characters collection before each test
beforeEach(function (done) {
   // Drop the collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
    
});