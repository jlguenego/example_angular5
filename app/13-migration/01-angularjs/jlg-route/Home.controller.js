export class HomeCtrl {
    /* @ngInject */

    constructor($resource) {
        this.ticketResource = $resource('../../../ws/tickets/:id', {
            id: '@id'
        }, {
            query: {
                method: 'GET',
                isArray: false,
            },
            update: {
                method: 'PUT'
            }
        });
        this.query();
    }

    query() {
        console.log('appel query en cours...');
        return this.ticketResource.query().$promise.then((response) => {
            console.log('response', response);
            this.tickets = response.content;
        }).catch((error) => {
            console.error('error', error);
        });
    }

    create() {
        console.log('appel create en cours...');
        return this.ticketResource.save(this.newTicket).$promise.then(() => {
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

    retrieve(id) {
        console.log('appel retrieve en cours...');
        return this.ticketResource.get({
            id
        }).$promise.then((ticket) => {
            console.log('ticket', ticket);
            this.ticket = ticket;
        }).catch((error) => {
            console.error('error', error);
        });
    }

    update(ticket) {
        console.log('appel update en cours...');
        return this.ticketResource.update({
            id: ticket.id,
            name: ticket.newName
            // tslint:disable-next-line:no-shadowed-variable
        }).$promise.then((ticket) => {
            console.log('ticket', ticket);
            this.ticket = ticket;
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

    delete(ticket) {
        console.log('appel delete en cours...');
        return this.ticketResource.delete({
            id: ticket.id
            // tslint:disable-next-line:no-shadowed-variable
        }).$promise.then((ticket) => {
            console.log('ticket', ticket);
            this.ticket = ticket;
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

    empty(d) {
        console.log('appel delete all en cours...');
        return this.ticketResource.delete().$promise.then(() => {
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

}