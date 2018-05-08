var mongoose = require('mongoose')
var DB_URL = 'mongodb://localhost:27017/myproject'

mongoose.connect(DB_URL)

mongoose.connection.on('connected', function() {
    console.log('已连接到' + DB_URL)
})
mongoose.connection.on('error', function() {
    console.log('连接失败' + DB_URL)
})

// setTimeout(function() {
//     mongoose.disconnect(function() {
//         console.log('断开连接')
//     })
// }, 2000)