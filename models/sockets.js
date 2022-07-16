const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    // Crear intancais

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");

      // Escuchar evento: mensaje-to-server
      socket.on("solicitar-ticket", (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on("next-ticket-work", ({ agent, desktop }, callback) => {
        const yourTicket = this.ticketList.asingnedTicket(agent, desktop);

        callback(yourTicket);
      });
    });
  }
}

module.exports = Sockets;
