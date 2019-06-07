const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./TODO/todo');

(function main(...args) {
    let comando = argv._[0];

    switch (comando) {
        case 'crear':
            porHacer.crear(argv.descripcion);
            break;
        case 'listar':
            let tareas = porHacer.listarDB();

            colors.bgBlue(console.log(`Listado de Tareas \n`));
            for (const tarea of tareas) {
                console.log(colors.bgCyan(`Tarea: ${tarea.descripcion}`));
                console.log(colors.bgCyan(`Estado: ${tarea.completado} `));
            }

            break;
        case 'actualizar':
            porHacer.actualizar({
                descripcion: argv.descripcion,
                completado: true
            });
            console.log(porHacer.listarDB());
            break;
        case 'borrar':
            if (porHacer.borrarDB(argv.descripcion)) {
                console.log(porHacer.listarDB());
            } else
                console.log('No se elimino el elemento o no existia');

            break;
        default:
            console.log(colors.bgBlue(`Comando no reconocido`));
            break;
    }
})();