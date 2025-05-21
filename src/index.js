const fs=require('fs')

var nombreCarpeta= "Carpeta Nueva"
var nombreArchivo= "./Carpeta Nueva/Archivo Nuevo.txt"
var mensaje="Hola"

if(fs.existsSync(nombreCarpeta)){

    if(fs.existsSync(nombreArchivo)){
        fs.unlink(nombreArchivo, (error)=>{
             if(error){
               throw error
            }
            console.log("Se elimino el archivo")

            if(fs.existsSync(nombreCarpeta)){
                fs.rmdir(nombreCarpeta, (error)=>{
                    if(error){
                        throw error
                    }
                    console.log("Se elimino la carpeta")
                })
            }
        }) 
    }
    else{
        fs.writeFile(nombreArchivo, '', (error)=>{
            if(error){
                throw error
            }
            console.log("Archivo Creado")

            fs.writeFile(nombreArchivo, mensaje, (error)=>{
                if(error){
                    throw error
                }
                console.log("Se escribio en el archivo creado")
            })

        })
    }
}else{
    fs.mkdir(nombreCarpeta, (error)=>{
        if(error){
            console.log(error.message)
        }
        console.log("Se creo una carpeta")
        
    })
}
