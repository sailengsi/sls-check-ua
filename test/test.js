const opn =  require('opn');

const express = require('express');
const fs=require("fs");
const app = express();
app.use(express.static('./'));
app.get("/index.html", function(request, response) {
    fs.readFile("./test/"+request.path.substr(1),function(err,data){
        if(err){
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });
});

app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    opn('http://localhost:3000/index.html');
    console.log('Server Starting on http://127.0.0.1:3000/index.html');
    console.log('如果浏览器没有自动打开，请手动打开浏览器访问上面的地址，谢谢');
});