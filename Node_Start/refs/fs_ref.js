const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {              // Создаем папку notes в папке с нашим файлом
//     if (err) throw err
//         console.log('Directory was created!');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello World', (err) => {      // Создаем файл mynotes.txt и записываем туда Hello World!
//     if (err) throw err
//         console.log('File was created!')
        
//         fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'From append file', (err) => {       // Добавляем в файл mynotes.txt фразу From append file
//             if (err) throw err
//                 console.log('File was edited!')

//                 fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (err, data) => {       // Читаем файл в кодировке utf-8
//                     if (err) throw err
//                         console.log(data)
//                 })
//         })       
// })

// fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'), path.join(__dirname, 'notes', 'notes.txt'), (err) => {       // Переименовываем файл с mynotes.txt на notes.txt
//     if (err) throw err
//         console.log('File was renamed!')
// })


// Task 3

// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if (err) throw err
//         console.log('Directory was created!');
// })

// fs.writeFile(path.join(__dirname, 'test', 'text.txt'), 'SPTVR19\n', (err) => {
//     if (err) throw err
//         console.log('File was created!')

//         fs.appendFile(path.join(__dirname, 'test', 'text.txt'), '2021\n', (err) => {
//             if (err) throw err
//                 console.log('File was edited!')
//         })
// })

fs.rename(path.join(__dirname, 'test', 'text.txt'), path.join(__dirname, 'test', 'textNew.txt'), (err) => {
    if (err) throw err
        console.log('File was renamed!')
})

