/**
 * 建立服务器
 */
//加载一个HTTP模块
var http = require('http');
//处理URL
var url = require('url');
//通过http模块下的createServer()创建并返回一个web服务器对象
var server = http.createServer();
server.on('error',function (err) {
    console.log(err);
});
server.on('listening',function () {
    console.log('listening....');
});
//监听客户端发送的请求
server.on('request',function (req,res) {
    //console.log(req.url)
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            res.writeHead(200,'',{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>首页</h1>');
            break;
        case '/user':
            res.writeHead(200,'',{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心</h1>');
            break;
        default:
            res.writeHead(404,'',{
            'content-type':'text/html;charset=utf-8'
        });
            res.end('<h1>404</h1>');
            break;
    }

    // http.STATUS_CODES
    /*res.writeHead(200,'',{
        //'content-type':'text/plain'
        'content-type':'text/html;charset=utf-8'
    });
    res.write('<h1>hello</h1>');
    res.end();*/
});
//监听网络，端口、主机地址、
//不带参数则端口由系统默认分配
server.listen(8080,'localhost');