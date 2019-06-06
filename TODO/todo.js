const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, 'utf-8', (error) => {
        if (error) throw new Error('No se pudo grabar: ' + error);
    });
};

const actualizar = (porHacer) => {
    cargarDB();
    // listadoPorHacer.map(tarea => {
    //     if (tarea.descripcion === porHacer.descripcion)
    //         tarea.completado = porHacer.completado;
    // });
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === porHacer.descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = porHacer.completado;
        guardarDB();
        return true;
    } else
        return false;
};

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    if (listadoPorHacer.find(tarea => tarea.descripcion === porHacer.descripcion) !== undefined)
        console.log(`Ya existe el registro`);
    else {
        listadoPorHacer.push(porHacer);
        guardarDB();
    }
};

const listarDB = () => {
    cargarDB();
    return listadoPorHacer;
};

module.exports = {
    crear,
    guardarDB,
    cargarDB,
    listarDB,
    actualizar
}