const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
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
    .command('borrar', 'Borra una tarea especificada', {
        ...options
    })
    .help()
    .argv;

module.exports = {
    argv
}