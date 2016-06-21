var port = 1337;
var connect = require('connect');
var app = connect();
var howdyWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Howdy Jon');
};
app.use(howdyWorld);
app.listen(port);
console.log('Server running at http://localhost:' + port);
