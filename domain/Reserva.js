import { EstadoReserva, TipoUsuario } from "./Enum";

export class Reserva {
    constructor(fechaAlta, huespedReservador, cantHuespedes, alojamiento, rangoFechas, estado, precioPorNoche) {
        this.fechaAlta = fechaAlta;
        this.huespedReservador = huespedReservador; //Usuario
        this.cantHuespedes = cantHuespedes;
        this.alojamiento = alojamiento; //Alojamiento
        this.rangoFechas = rangoFechas; //RangoFechas
        this.estado = EstadoReserva.PENDIENTE; //EstadoReserva
        this.precioPorNoche = precioPorNoche;
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        return new CambioEstadoReserva(new Date(), nuevoEstado, this, motivo, this.huespedReservador)
    }
}

export class CambioEstadoReserva {
    constructor(fecha, estado, reserva, motivo, usuario) {
        this.fecha = fecha;
        this.estado = estado; //EstadoReserva
        this.reserva = reserva; //Reserva
        this.motivo = motivo;
        this.usuario = usuario; //Usuario
    }
}