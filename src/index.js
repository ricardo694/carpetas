
const fs = require('fs');

const carpeta = './carpeta';     
const archivo = carpeta + '/mensaje.txt'; 
const mensaje = 'Hola';

if (fs.existsSync(archivo)) {
  
  fs.unlinkSync(archivo);
  console.log(' Archivo eliminado');


  fs.rmdirSync(carpeta);
  console.log(' Carpeta eliminada');
} else {

  if (!fs.existsSync(carpeta)) {
    fs.mkdirSync(carpeta);
    console.log(' Carpeta creada');
  }

  fs.writeFileSync(archivo, mensaje);
  console.log(' Archivo creado con mensaje');
}