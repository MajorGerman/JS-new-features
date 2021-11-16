const http = require('http')
const path = require('path');               // Подгружаем модуль path

const server = http.createServer( (req, res) => {
    console.log(req.url)

    res.write('<style>')
    res.write('* {')
    res.write('transition: 0.5s;')
    res.write('}')

    res.write('img:hover {')
    res.write('transform: scale(1.05);')
    res.write('}')
    res.write('</style>')

    res.write('<div style = "display: flex; justify-content: center; text-align: center; font-family: arial;">')
        res.write('<div style = "display: inline-block; justify-content: center; text-align: center;">')
            res.write('<h2> I like potatoes! </h2><br>')
            res.write('<img style="width: 200px; border-radius: 12px;" src="' + path.dirname(__filename) + "/photo.jpg" + '">')
        res.write('</div>')
    res.end('</div>')

})

server.listen(3001, () => {
    console.log('Server is running...')
})