var proData = {
    'name':'doulu1',
    'fileDate':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },
        {
            'name':'img',
            'type':'dir'
        },
        {
            'name':'index.html',
            'type':'file',
            'content':'<!DOCTYPE html>\n' +
            '<html lang="en">\n' +
            '<head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <title>Title</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '<div class="box">\n' +
            '    <p id="welcome"></p>\n' +
            '</div>\n' +
            '</body>\n' +
            '</html>'
        },
    ]
};
var fs = require('fs');
if(proData.name){
    fs.mkdirSync(proData.name);
    var fileData = proData.fileDate;
    if(fileData && fileData.forEach){
        fileData.forEach(function (f) {
            f.path = proData.name +'/' + f.name;
            f.content = f.content || '';
            switch (f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path,f.content);
                    break;
                default:
                    break;
            }
        })
    }
}