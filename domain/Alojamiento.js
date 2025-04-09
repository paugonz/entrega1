export class Alojamiento {
    constructor(anfitrion, nombre, descripcion, precioPorNoche, moneda, horarioCheckIn, horarioCheckOut, direccion, cantHuespedesMax, caracteristicas, reservas, fotos) {
        this.anfitrion = anfitrion; //Intancia de Usuario
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioPorNoche = precioPorNoche; //Double
        this.moneda = moneda; // ENUM
        this.horarioCheckIn = horarioCheckIn;
        this.horarioCheckOut = horarioCheckOut;
        this.direccion = direccion; //Instancia de Direccion
        this.cantHuespedesMax = cantHuespedesMax;
        this.caracteristicas = caracteristicas; //Caracteristica[]
        this.reservas = reservas; //Reserva[]
        this.fotos = fotos; //Foto[]
    }

    estasDisponibleEn(rangoDeFechas) {
        return true;
    }

    tuPrecioEstaDentroDe(valorMinimo, valorMaximo) {
        return true;
    }

    tenesCaracteristicas(caracteristicas) {
        return true;
    }

    puedenAlojarse(cantHuespedes) {
        return true;
    }
}

export class Foto {
    constructor(descripcion, path) {
        this.descripcion = descripcion;
        this.path = path;
    }
}

export class Direccion {
    constructor(calle, altura, ciudad, lat, long) {
        this.calle = calle;
        this.altura = altura;
        this.ciudad = ciudad; //Ciudad
        this.lat = lat;
        this.long = long;
    }
}

export class Ciudad {
    constructor(nombre, pais) {
        this.nombre = nombre;
        this.pais = pais; //Pais
    }
}

export class Pais {
    constructor(nombre) {
        this.nombre = nombre;
    }
}