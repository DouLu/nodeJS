/**
 * 建立服务器
 */
//加载一个HTTP模块
var http = require('http');
//处理URL
var url = require('url');

var fs = require('fs');
var qs = require('querystring');

var htmlDir = __dirname;//返回当前文件所在路径

var server = http.createServer();

server.on('listening',function () {
    console.log("listening....")
});
server.on('request',function (req,res) {
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            sendDate(htmlDir + '/html/index.html',req,res);
            break;
        case '/user':
            sendDate(htmlDir + '/html/user.html',req,res);
            break;
        case '/login':
            sendDate(htmlDir + '/html/sign-in.html',req,res);
            break;
        case '/login/check':
            //get提交
            // console.log(qs.parse(urlStr.query));
            //post提交
            if (req.method.toUpperCase() == 'POST'){
                //先从缓存区里面拿到所有数据
                var str = '';
                req.on('data',function (chunk) {
                    str += chunk;
                });
                //缓存区数据全部拿出拼接好后，再输出数据
                req.on('end',function () {
                    console.log(str);
                    console.log(qs.parse(str));
                })
            }
            break;
        default:
            sendDate(htmlDir + '/html/404.html',req,res);
            break;
    }
});
server.listen(8080,'localhost');
function sendDate(file,req,res) {
    fs.readFile(file,function (err,data) {
        if (err){
            console.log(err)
            res.writeHead(404,'',{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>404</h1>');
        }else {
            res.writeHead(404,'',{
                'content-type':'text/html;charset=utf-8'
            });
            res.end(data);
        }
    })
}