var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/project", function(err) {
    if (!err) {
        var schema = new mongoose.Schema({num: Number, name: String, size: String})
        schema.methods.findSimilarSizes = function (cb) {
            return this.model('MyModel').find({size: this.size}, cb)
        }
        var MyModel = mongoose.model('MyModel', schema)
        var doc1 = new MyModel({ name:'doce1', size: 'small', num: 20})
        var doc2 = new MyModel({ name:'doce2', size: 'big', num: 10})
        var doc3 = new MyModel({ name:'doce3', size: 'small', num: 80})
        doc1.save()
        doc2.save()
        doc3.save()
        setTimeout(function() {
            doc1.findSimilarSizes(function(err, docs) {
                docs.forEach(function(item, index) {
                    console.log(item.name)
                })
            })
        }, 0)
    }
})