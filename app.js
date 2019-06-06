const argv = require('yargs').argv;
const colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case crear:
        console.log(colors.green(`Crear`));
        break;
    case listar:
        console.log(colors.bgBlue(`Crear`));
        break;
    case actualizar:
        console.log(colors.rainbow(`Crear`));
        break;
    default:
        console.log(colors.red(`Crear`));
        break;
}