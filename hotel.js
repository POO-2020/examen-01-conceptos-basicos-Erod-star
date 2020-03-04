import Reservacion from "./reservacion.js";
import Huesped from "./huesped.js";

export default class Hotel {
    constructor(nombre) {
        this.nombre = nombre;
        this.reservaciones = new Array();
    }

    addReservaciones(reservacion) {
        this.reservaciones.push(reservacion);
    }

    getNumeHuespedes() {
        this.reservaciones.forEach((reservacion, i) => {
            console.log(`${i} ${reservacion}`);
        });
    }

    print() {

    }
}