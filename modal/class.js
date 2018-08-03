var stu = require('./student');
var tea = require('./teacher');

// tea.add('teacher1');
function add(teaN,stus) {
    tea.add(teaN)
    stus.forEach(function (item,index) {
        stu.add(item)
    })
}
exports.add = add;

// module.exports = add;