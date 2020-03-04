import Reservacion from "./reservacion.js"
import Huesped from "./huesped.js"
import Hotel from "./hotel.js"

export default class Main {
    constructor() { }

    testHuesped() {
        let x = new Huesped('Jose Barajas', 'Masculino');
        console.log(x.getDescripcion());
    }

    testReservacion() {
        let x1 = new Reservacion(12, new Date(2007, 2, 12), 3);
        console.log(x1.getFechaFormatoCorte());
        let h2 = new Huesped('Juan Pérez', 'Masculino');
        let h1 = new Huesped('Jose Barajas', 'Masculino');
        x1.addHuesped(h1);
        x1.addHuesped(h2);
        console.log(x1.getNumHuespedes());
        console.log(x1.print());
        x1.listarHuespedes();
    }

    testHotel() {
        let x1 = new Reservacion(12, new Date(2007, 2, 12), 3);
        x1.addHuesped(new Huesped('Juan Pérez', 'Masculino'));
        x1.addHuesped(new Huesped('Jose Barajas', 'Masculino'));
        let x2 = new Reservacion(12, new Date(2007, 2, 12), 3);
        x2.addHuesped(new Huesped('Juan Juanjo', 'Masculino'));
        x2.addHuesped(new Huesped('Jose Jose', 'Masculino'));

        let z = new Hotel('hotel');
        z.addReservaciones(x1);
        z.addReservaciones(x2);
    }
}

let app = new Main();
app.testHuesped();
app.testReservacion();
app.testHotel();
