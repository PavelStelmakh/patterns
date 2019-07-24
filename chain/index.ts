import { Log, Permission, DataManager } from './handlers';
import { Handler } from './interfaces';

const log = new Log;
const permission = new Permission;
const data = new DataManager;

log.setNext(permission).setNext(data);

const logic = (handler: Handler) => {
    console.log(handler.handle('GET'));
    console.log()
    console.log(handler.handle('POST'));    
}

logic(log);