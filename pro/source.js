var fs = require('fs');
var filedir = './doulu1/source';
//监听文件变化
fs.watch(filedir,function (event,file) {
    fs.readdir(filedir,function (err,dataList) {
        var arr = [];
        dataList.forEach(function (f) {
            if(f){
                var info = fs.statSync(filedir + '/' +f);
                if(info.mode == 33206){
                    arr.push(filedir + '/' +f);
                }
            }
        });
        //读取数组中文件内容，并合并
        var content = '';
        arr.forEach(function (f) {
            var c = fs.readFileSync(f);
            content += c.toString() + '\n';
        });
        //保存合并的内容到指定文件里
        fs.writeFileSync('./doulu1/js/index.js',content);
    });
});