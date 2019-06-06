const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (error) => {
        if (error) console.log(error);
    });
};

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    return porHacer;
};

module.exports = {
    crear
}