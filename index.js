// const express = require('express') // nạp express trong node-modules vào 
// const app = express() // gọi express để gọi đối tượng đại diện cho node js của mình
// const port = 3000 // chọn chạy website ở cổng nào

// app.get('/', (req, res) => res.send('say hello world !')) //định nghĩa router cho website 

// app.listen(port, () => console.log(`Example app listenig at http://localhost:${port}`))

const express = require('express')
const app = express()
const port = 3000


app.get('/tin-tuc', function (req, res) {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('hello world!')
})
app.listen(port, () => console.log(`example app listening at http://localhost:${port}`))