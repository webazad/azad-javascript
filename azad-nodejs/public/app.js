const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World another writign\n');
  res.end();
});
*/

// 404 RESPONSE
function send404response(res){
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/plain');
	res.write("Error: Page not found!");
	res.end();
}

// HANDLE A USER REQUEST
function onRequest(req, res){
	if(req.method == 'GET' && req.url == '/'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		var myReadStream = fs.createReadStream(__dirname + '/index.html','utf-8');
		myReadStream.pipe(res);
	}else if(req.method == 'GET' && req.url == '/blog'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		var myReadStream = fs.createReadStream(__dirname + '/blog.html','utf-8');
		myReadStream.pipe(res);
	}else if(req.method == 'GET' && req.url == '/contact'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		var myReadStream = fs.createReadStream(__dirname + '/contact.html','utf-8');
		myReadStream.pipe(res);
	}else{
		send404response(res);		
	}

}

const server = http.createServer(onRequest);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});