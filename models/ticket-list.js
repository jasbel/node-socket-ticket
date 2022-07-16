const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pendants = [];
    this.asingned = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get last13() {
    return this.asingned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendants.push(newTicket);
    return newTicket;
  }

  asingnedTicket(agent, desktop) {
    if (this.pendants.length === 0) {
      return null;
    }

    const nextTicket = this.pendants.shift();

    nextTicket.agent = agent;
    nextTicket.desktop = desktop;

    this.asingned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
