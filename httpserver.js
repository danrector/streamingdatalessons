var through = require('through');
var http = require('http');

//process.stdin.pipe(through(write, end)).pipe(process.stdout);

//function write (buf) { this.queue(buf) }
//function end () { this.queue(null) }


//var fs = require('fs');

var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(through(function (buf) {
			this.queue(buf.toString().toUpperCase());
		})).pipe(res);
	}
	else res.end('send me a POST\n');	
});
server.listen(parseInt(process.argv[2]));


/*
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf) {
            this.queue(buf.toString().toUpperCase());
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));
*/