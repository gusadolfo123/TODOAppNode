const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        ...options
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        ...options,
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Marca como completada o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}