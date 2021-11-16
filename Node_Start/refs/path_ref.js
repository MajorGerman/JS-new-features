const path = require('path');               // Подгружаем модуль path

console.log(__filename);                    // Возвращает полный путь к файлу
console.log(path.basename(__filename));     // Возвращает имя файла с форматом
console.log(path.dirname(__filename));      // Возвращает полный путь к папке с файлом
console.log(path.extname(__filename));      // Возвращает формат файла

console.log(path.parse(__filename));        // Возвращает объект, содержащий информацию о пути файла

console.log(path.join(__dirname, 'test', 'second.html'));           // Возвращает путь, образованный простым склеиванием папки файла и данных аргументов
console.log(path.resolve(__dirname, './test', '/second.html'));     // Возвращает путь, образованный непростым склеиванием папки файла и данных переменных