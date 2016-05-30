var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	var html=fs.readFileSync(__dirname+'/hello.html');
	html=html.replace('{date}',new Date().toString());
	res.end(html);

});
server.listen(1222,'127.0.0.1');
