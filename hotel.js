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
        let x = 0;
        this.reservaciones.forEach((reservacion, i) => {
            x = reservacion.getNumHuespedes() + x;
        });

        return (x)
    }

    print() {
        this.reservaciones.forEach((reservacion) => {
            console.log(reservacion.print());
            reservacion.listarHuespedes();
        });
    }
}