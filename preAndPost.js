var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age: Number, name: String})
        schema.pre('find', function(next) {
            console.log('pre 方法')
            next()
        })
        // post 不是执行操作后才执行，而是在执行操作前最后执行的方法 (post方法中不可使用 next())
        schema.post('find', function() {
            console.log('post 方法')
        })
        var temp = mongoose.model('temp', schema)
        temp.find(function(err, docs) {
            console.log(docs)
        })
    }
})