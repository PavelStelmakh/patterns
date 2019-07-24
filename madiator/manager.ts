import { Accountant } from './accountant';
import { Director } from './director';

interface Event {
    name: string,
    request: string,
}

interface IMediator {
    notify(event: Event): void,
}

export class Manager implements IMediator {
    accountant: Accountant = new Accountant();
    director: Director = new Director();

    notify(event: Event) {
        switch(event.request) {
            case 'SALARY':
                this.accountant.salaryUp(event.name);
                break;
            case 'LOCATION':
                this.director.relocation(event.name);
                break;
        }
    }
}
