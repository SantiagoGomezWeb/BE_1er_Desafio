class TicketManager {
    static contadorId = 0;
    #precioBaseDeGanancia = 0.15;
    constructor() {
        this.eventos = [];    
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        const capa = capacidad ?? 50;
        const fec = fecha ?? new Date().toLocaleDateString;
        TicketManager.contadorId++;
        const eventoNuevo = {
            id: TicketManager.contadorId,
            nombre: nombre,
            lugar: lugar,
            precio: precio * (1 + this.#precioBaseDeGanancia),
            capacidad: capa,
            fecha: fec,
            participantes: []
        };
        this.eventos.push(eventoNuevo);
    }

    agregarUsuario(idEvento, idUsuario) {
        const eventoEncontrado = this.eventos.find(evento => evento.id === idEvento)   
        if (!eventoEncontrado) {
            console.error("Evento no encontrado");
            return;
        }
        const usuarioRegistrado = eventoEncontrado.participantes.includes(idUsuario);
        if (usuarioRegistrado) {
            console.error("El usuario ya està registrado en el Evento");
            return;
        }
        eventoEncontrado.participantes.push(idUsuario);
        }
    
        ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){

            //const eventoEncontrado = this.eventos.find(evento => evento.id === idEvento)   
            //if (!eventoEncontrado) {
            const indiceEvento = this.eventos.findIndex(evento => evento.id === idEvento);

            if (indiceEvento < 0)  {
                console.error("Evento no encontrado");
                return;
            }
            const eventoEncontrado = this.eventos[indiceEvento];

            TicketManager.contadorId++;
            const nuevoEvento = {
                ...eventoEncontrado,
                id: TicketManager.contadorId++,
                lugar: nuevaLocalidad, 
                fecha: nuevaFecha
            };
            //this.eventos.push(nuevoEvento);
            this.eventos[indiceEvento] = nuevoEvento;
        }
}



