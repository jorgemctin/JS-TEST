class Contrasenya {
    constructor(newLongitud = 8){
        this.longitud = newLongitud;
        this.contrasena = calculaContr(newLongitud);
    }
    calculaContr(newLongitud){
        let diccionario = 'abcdefg123456789_-!@';
        console.log(diccionario.length);
        for (let i = 0; i < newLongitud; i++) {
            //random
            //getcaracter
            //asignar variable
        }
        //returnar variable
        return 'abs478_gvvsd';
    }
}