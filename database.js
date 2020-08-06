const mongoose = require('mongoose');
const config = require('./config');

module.exports = function()
{
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    
    mongoose.connect(config.DB)
    .then((result) => { return result })
    .catch((err) => { console.log('Error logging into the database: ', err)});

    mongoose.connection.on('connected', function(){ console.log('Mongoose connected to the database') });
    mongoose.connection.on('error', function(err){console.log('Mongoose encountered an error while connecting: ', err)});
    mongoose.connection.on('disconnected', function(){ console.log('Mongoose connection was disconnected') });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){ console.log('Mongoose connection was closed due to interruption.');
        process.exit(0)
        });
    });
}