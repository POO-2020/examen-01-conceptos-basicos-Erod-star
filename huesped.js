export default class Huesped {
    /**
     * 
     * @param {string} nombre | Nombre completo del huésped
     * @param {string} genero | Genero del huésped (Masculino o Femenino)
     */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    getDescripcion() {
        return `${this.nombre} (${this.genero})`
    }
}