const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./TODO/todo');

(function main(...args) {
    let comando = argv._[0];

    switch (comando) {
        case 'crear':
            let tarea = porHacer.crear(argv.descripcion);
            console.log(tarea);
            break;
        case 'listar':
            console.log(colors.bgBlue(`listar`));
            break;
        case 'actualizar':
            console.log(colors.bgBlue(`actualizar`));
            break;
        default:
            console.log(colors.bgBlue(`Comando no reconocido`));
            break;
    }
})();