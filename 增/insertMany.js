var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/insert', function(err) {
    if (!err) {
        var schema = new mongoose.Schema({age:Number, name:String})
        var temp = mongoose.model('temp', schema)
        temp.insertMany([
            {name: 'howie', age:100}, 
            {name: '1', age:101},
            {name: '2', age:200},
            {name: '3', age:1212}
        ], function(err, docs) {
                console.log(docs)
        })
    }
})