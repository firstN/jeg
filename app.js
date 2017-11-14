
var index = require('./routes/index');
var users = require('./routes/users');
var back = require('./routes/back');
var mongoDB = require('./routes/mongoDB');

var app = require('./seting.js')
var error = require('./routes/error.js')

app.use('/', index);
app.use('/users', users);
app.use('/back', back);
app.use('/mongoDB', mongoDB);
app.use('*',error);




module.exports = app;
